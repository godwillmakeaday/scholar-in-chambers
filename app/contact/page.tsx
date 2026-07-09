import Link from "next/link";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact — Scholar in Chambers",
  description: "Contact Scholar in Chambers.",
};

export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="page-hero compact">
        <p className="eyebrow">Correspondence</p>
        <h1>Send a note to the chamber desk</h1>
        <p>
          For essays, lectures, legal-intellectual collaborations, publishing, institutional design conversations, and professional correspondence.
        </p>
      </div>

      <div className="contact-card">
        <p className="eyebrow">Email</p>
        <h2>{site.email}</h2>
        <p>
          Use clear subject lines such as “Essay Collaboration”, “Lecture Invitation”, “Institutional Design”, or “Legal Inquiry”.
        </p>
        <Link className="button primary" href={`mailto:${site.email}`}>Write by email</Link>
      </div>
    </section>
  );
}
