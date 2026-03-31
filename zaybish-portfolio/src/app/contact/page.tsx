import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zaybish Tariq.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <ContactContent />
      </div>
    </div>
  );
}
