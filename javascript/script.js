const downloadCv = document.querySelector("#cvbtn");
downloadCv.addEventListener("click", function () {
  const cvUrl = ".Files/Resume.pdf";

  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Pranav_Software_Developer.pdf";
  link.click();
});

function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle("flipped");
}

const vcfBtn = document.querySelector("#vcf-btn");

vcfBtn.addEventListener("click", function () {
  const vcfContent = `
BEGIN:VCARD
VERSION:3.0
FN:Pranav Malap
ORG:Ace360Degree
TITLE:Software Developer Intern
TEL;TYPE=CELL:+91-7666935854
EMAIL;TYPE=INTERNET:pranavmalap1@gmail.com
ADR;TYPE=WORK:;;18 Upper, Mindspace, Chincholi Bunder Road, New Link Rd;Malad West;Mumbai;Maharashtra;400064;India
END:VCARD
  `.trim();

  // Create a Blob with the vCard content
  const vcfBlob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(vcfBlob);
  link.download = "pranav.vcf";

  // Trigger the download
  link.click();

  // Cleanup
  URL.revokeObjectURL(link.href);
});
