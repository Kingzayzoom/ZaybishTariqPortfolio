import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zaybish Tariq for internships, SWE roles, or freelance projects.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="section-shell pt-32">
        <ContactContent />
      </div>
    </div>
  );
}
