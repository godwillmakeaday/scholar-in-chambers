import Link from "next/link";
import {
  ArchiveFilterRow,
  CategoryCards,
  ChamberVerticalCards,
  EditorsNoteBlock,
  FeaturedIssue,
  LetterCards,
  NewsletterSignup,
} from "@/components/Letters";
import { SectionHeading } from "@/components/SectionHeading";
import { lettersBrand, sampleLetters } from "@/lib/content";

export const metadata = {
  title: "Letters from Chambers — Scholar in Chambers",
  description:
    "Public letters from a lawyer’s desk on law, society, business, justice, and institutions.",
};

export default function LettersFromChambersPage() {
  return (
    <section className="page-section letters-page">
      <div className="page-hero letters-hero">
        <p className="eyebrow">Correspondence from the chamber desk</p>
        <h1>{lettersBrand.name}</h1>
        <p>{lettersBrand.subtitle}</p>
        <p>
          The chamber is not merely an office. It is a place of interpretation, judgment, discipline, and public guidance: a room where disputes are understood, risks are named, society is read, and law is translated into usable clarity.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href={`/letters-from-chambers/${sampleLetters[0].slug}`}>Read the Latest Letter</Link>
          <Link className="button secondary" href="#subscribe">Subscribe to Letters</Link>
        </div>
      </div>

      <FeaturedIssue />

      <EditorsNoteBlock />

      <section className="letters-definition-section">
        <SectionHeading eyebrow="What it is" title="The lawyer as correspondent">
          Letters from Chambers grows out of Scholar in Chambers, but it performs a different function.
        </SectionHeading>
        <div className="definition-grid">
          <article className="definition-card">
            <p className="card-eyebrow">Depth</p>
            <h3>Scholar in Chambers</h3>
            <p>
              The lawyer as thinker: essays, legal reflection, jurisprudence, society, justice, institutions, public reasoning, dignity, civic life, and the discipline of thought.
            </p>
          </article>
          <article className="definition-card highlighted">
            <p className="card-eyebrow">Continuity</p>
            <h3>Letters from Chambers</h3>
            <p>
              The lawyer as correspondent: public letters, guidance, warnings, reflections, institutional notes, and serious legal-intellectual continuity from the desk of counsel.
            </p>
          </article>
        </div>
        <p className="architecture-line centered">{lettersBrand.architecture}</p>
      </section>

      <section className="public-desk-panel">
        <div>
          <p className="eyebrow">The chamber as a public desk</p>
          <h2>Where experience becomes guidance</h2>
        </div>
        <p>
          A chamber receives more than case files. It receives anxiety, conflict, unsigned agreements, inherited land, family pressure, police invitations, business assumptions, public power, and the quiet confusion of citizens trying to act wisely. Letters from Chambers turns that experience into correspondence: not noise, not casual opinion, but thoughtful public notes written with judgment, dignity, legal reflection, and institutional memory.
        </p>
      </section>

      <NewsletterSignup />

      <section className="content-section">
        <SectionHeading eyebrow="Letter categories" title="Series structure">
          These categories keep the newsletter serious, searchable, and expandable without turning it into a scattered blog.
        </SectionHeading>
        <CategoryCards />
      </section>

      <section className="content-section archive-section">
        <SectionHeading eyebrow="Archive" title="Latest Letters from Chambers">
          The first body of public correspondence from chambers, each prepared as a serious legal-intellectual issue with continuity, category, and citation.
        </SectionHeading>
        <ArchiveFilterRow />
        <LetterCards />
      </section>

      <section className="content-section future-chambers-section">
        <SectionHeading eyebrow="Future specialist chambers" title="Expansion without confusion">
          Letters from Chambers should first grow as one strong newsletter with internal categories. These specialist chambers are future editorial verticals, not separate law firms or separate institutions yet.
        </SectionHeading>
        <ChamberVerticalCards />
      </section>

      <section className="editorial-note">
        <p className="eyebrow">Editorial note</p>
        <p>
          Letters from Chambers is for public legal education, institutional reflection, and civic guidance. It is not a substitute for formal legal advice on a specific matter.
        </p>
      </section>
    </section>
  );
}
