import { site } from "@/lib/content";

export const metadata = {
  title: "About — Scholar in Chambers",
  description: "About the Scholar in Chambers platform.",
};

export default function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="page-hero compact">
        <p className="eyebrow">About the signature</p>
        <h1>{site.name}</h1>
        <p>
          A personal intellectual platform by {site.author}, built around legal reasoning, public thought, institutional design, and the moral responsibility of clarity.
        </p>
      </div>

      <div className="split-section align-start">
        <article className="body-card">
          <h2>Why this should exist</h2>
          <p>
            Some ideas are too serious to remain inside WhatsApp notes, voice notes, private conversations, and scattered drafts. They need a named room where they can be refined, archived, challenged, and shared.
          </p>
          <p>
            Scholar in Chambers gives your thinking an official house. It lets the public meet the lawyer, the essayist, the builder, the civic thinker, and the person of conscience without confusing one role for another.
          </p>
        </article>
        <article className="body-card dark-card">
          <h2>The tone</h2>
          <p>
            Premium, restrained, legally aware, literary, thoughtful, and institution-minded. The site should feel less like social media and more like a study table with a lamp, files, books, and a careful mind at work.
          </p>
        </article>
      </div>
    </section>
  );
}
