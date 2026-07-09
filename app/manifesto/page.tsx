import { doctrines } from "@/lib/content";

export const metadata = {
  title: "Manifesto — Scholar in Chambers",
  description: "The founding manifesto of Scholar in Chambers.",
};

export default function ManifestoPage() {
  return (
    <section className="page-section manifesto-page">
      <div className="page-hero">
        <p className="eyebrow">Founding note</p>
        <h1>The Scholar in Chambers Manifesto</h1>
        <p>
          I do not accept that the chamber must be a narrow room. A chamber can be an office of service, a school of evidence, a sanctuary of judgment, and a workshop for public meaning.
        </p>
      </div>

      <article className="manifesto-card">
        <p>
          The modern lawyer should not only answer questions after trouble has arrived. He should help society name risks before they mature, preserve records before they are disputed, and build standards before confusion becomes culture.
        </p>
        <p>
          Scholar in Chambers is therefore a signature: a way of saying that thought, law, faith, technology, and public life can meet without losing their seriousness.
        </p>
        <p>
          It is an attempt to treat essays as legal architecture, memory as public infrastructure, and disciplined reflection as a form of service.
        </p>
      </article>

      <div className="principle-grid">
        {doctrines.map((line) => (
          <div key={line} className="principle-card">{line}</div>
        ))}
      </div>
    </section>
  );
}
