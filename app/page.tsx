import Link from "next/link";
import { ChamberCards, EssayCards } from "@/components/Cards";
import { LettersHomeSection } from "@/components/Letters";
import { SectionHeading } from "@/components/SectionHeading";
import { doctrines, offerings, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">The personal signature of a lawyer-scholar</p>
          <h1>{site.name}</h1>
          <p className="hero-lede">
            {site.strapline} This is where chamber discipline meets essay, technology, public philosophy, and institution-building imagination.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/essays">Enter the essays</Link>
            <Link className="button secondary" href="/letters-from-chambers">Letters from Chambers</Link>
            <Link className="button secondary" href="/manifesto">Read the manifesto</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Scholar in Chambers identity card">
          <div className="panel-glow" />
          <p>Filed under</p>
          <h2>Law · Thought · Evidence · Institutions</h2>
          <div className="signature-line">Scholar in Chambers</div>
          <span>From chamber notes to public doctrine</span>
        </div>
      </section>

      <section className="thesis-band">
        <p>
          The idea is simple: a lawyer's chamber should not only produce letters, pleadings, and advice. It can also produce public clarity, institutional memory, civic imagination, and standards of trust.
        </p>
      </section>

      <LettersHomeSection />

      <section className="content-section">
        <SectionHeading eyebrow="The rooms" title="Four chambers of thought">
          The site is organised as a set of intellectual rooms, each with its own discipline, audience, and archive.
        </SectionHeading>
        <ChamberCards />
      </section>

      <section className="split-section">
        <div>
          <SectionHeading eyebrow="The doctrine" title="What the signature stands for" />
          <div className="quote-stack">
            {doctrines.map((line) => (
              <blockquote key={line}>{line}</blockquote>
            ))}
          </div>
        </div>
        <aside className="desk-note">
          <p className="eyebrow">Desk note</p>
          <h3>Not a blog. A chamber archive.</h3>
          <p>
            The tone should feel like a private study opened to the public: thoughtful, restrained, legally aware, spiritually serious, and institutionally ambitious.
          </p>
        </aside>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Selected essays" title="A living library of public thought">
          Begin with essays that already match your recurring ideas: media, capacity, trust, evidence, institutions, technology, and meaning.
        </SectionHeading>
        <EssayCards limit={3} />
        <div className="section-action">
          <Link className="button secondary" href="/essays">View essay library</Link>
        </div>
      </section>

      <section className="content-section offerings-section">
        <SectionHeading eyebrow="What it can become" title="The platform beneath the signature" />
        <div className="offering-grid">
          {offerings.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
