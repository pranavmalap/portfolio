import { NextResponse } from "next/server";
import {
  profile,
  skills,
  experience,
  projects,
  education,
  activities,
} from "@/data/profile";

// This route powers the "Ask AI about Pranav" widget.
// - If ANTHROPIC_API_KEY or OPENAI_API_KEY is set in the environment,
//   it calls the real API with a system prompt scoped to Pranav's profile.
// - Otherwise it falls back to a small rule-based mock so the feature
//   works end-to-end with zero setup (no database, no server required).

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function buildSystemPrompt(): string {
  const skillsText = skills
    .map((group) => `${group.category}: ${group.items.join(", ")}`)
    .join("\n");

  const projectsText = projects
    .map(
      (p) =>
        `- ${p.title} (${p.stack.join(", ")}): ${p.description}${
          p.link ? ` Live: ${p.link}` : ""
        }${p.github ? ` GitHub: ${p.github}` : ""}`
    )
    .join("\n");

  const experienceText = experience
    .map(
      (e) =>
        `- ${e.role} at ${e.company}, ${e.location} (${e.period}): ${e.bullets.join(
          "; "
        )}`
    )
    .join("\n");

  const educationText = education
    .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
    .join("\n");

  const activitiesText = activities
    .map((a) => `- ${a.role}, ${a.org}: ${a.bullets.join("; ")}`)
    .join("\n");

  return `You are the AI assistant embedded in ${profile.name}'s personal portfolio website.
Your ONLY purpose is to answer questions about ${profile.name} — his background, skills, experience, projects, and education — to help recruiters and hiring managers evaluate him for Working Student, internship, or junior developer roles in Germany.

Facts about ${profile.name}:
Role/target: ${profile.role}
Location: ${profile.location}
About: ${profile.about}

Skills:
${skillsText}

Experience:
${experienceText}

Projects:
${projectsText}

Education:
${educationText}

Extracurricular:
${activitiesText}

Rules:
- Answer only using the facts above. Be concise, professional, and friendly.
- If asked "why should I hire him", give a short, confident, honest pitch grounded in the facts above.
- If asked anything unrelated to ${profile.name} (general knowledge, coding help unrelated to him, other people, etc.), politely decline and steer the conversation back, e.g. "I can only answer questions about Pranav's background and work — try asking about his projects, skills, or experience."
- Never invent facts that aren't listed above.`;
}

function mockAnswer(message: string): string {
  const m = message.toLowerCase();

  const isAboutPranav =
    /pranav|project|tech|skill|stack|experience|intern|hire|education|degree|study|university|chemnitz|contact|reach|language|activit|rotaract/.test(
      m
    );

  if (!isAboutPranav) {
    return "I can only answer questions about Pranav's background, skills, and projects — try asking what he's built, what technologies he knows, or why you should hire him!";
  }

  if (/project/.test(m)) {
    const list = projects
      .map((p) => `• ${p.title} — ${p.stack.join(", ")}`)
      .join("\n");
    return `Pranav has built several real-world projects:\n${list}\n\nAsk me about any one of them for more detail.`;
  }

  if (/tech|stack|skill|know|language/.test(m)) {
    const list = skills.map((g) => `${g.category}: ${g.items.join(", ")}`).join("\n");
    return `Pranav's tech stack:\n${list}`;
  }

  if (/hire|why should/.test(m)) {
    return `Pranav is a full-stack developer currently pursuing an M.Sc. in Web Engineering at TU Chemnitz, with hands-on experience shipping production features (React, Next.js, Laravel, CodeIgniter) during a real internship at Ace 360 Degree. He's comfortable modernizing legacy systems, owns projects end-to-end, and is actively based in Germany and looking for a Working Student or internship role — ready to contribute from day one.`;
  }

  if (/intern|experience|work/.test(m)) {
    const e = experience[0];
    return `${e.role} at ${e.company} (${e.location}), ${e.period}:\n${e.bullets
      .map((b) => `• ${b}`)
      .join("\n")}`;
  }

  if (/educat|degree|study|university|chemnitz/.test(m)) {
    return education.map((e) => `• ${e.degree} — ${e.institution} (${e.period})`).join("\n");
  }

  if (/contact|reach|email|phone/.test(m)) {
    return `You can reach Pranav at ${profile.email} or via the contact page on this site.`;
  }

  return profile.about;
}

async function callAnthropic(messages: ChatMessage[]): Promise<string | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: buildSystemPrompt(),
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data?.content?.[0]?.text ?? null;
  } catch {
    return null;
  }
}

async function callOpenAI(messages: ChatMessage[]): Promise<string | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 400,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data?.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    const lastUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

    if (!lastUserMessage.trim()) {
      return NextResponse.json({ reply: "Ask me anything about Pranav!" });
    }

    const reply =
      (await callAnthropic(messages)) ??
      (await callOpenAI(messages)) ??
      mockAnswer(lastUserMessage);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong — please try again." },
      { status: 500 }
    );
  }
}
