"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ServicesIntro from "../components/intros/ServicesIntro";

export default function ProjectsPage() {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  return (
    <>
      {!showContent && (
        <ServicesIntro key={pathname} onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div className="p-10 ">
          <h1 className="text-3xl">🚀 Services</h1>
          {/* Your project cards/content here */}
        </div>
      )}
    </>
  );
}
