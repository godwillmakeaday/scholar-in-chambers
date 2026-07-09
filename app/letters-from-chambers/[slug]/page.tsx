import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsletterSignup } from "@/components/Letters";
import { getAdjacentLetters, getLetterBySlug, letters, editorialDisclaimer } from "@/lib/letters";

export async function generateStaticParams() {
  return letters.map((letter) => ({ slug: letter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const letter = getLetterBySlug(slug);

  if (!letter) {
    return {
      title: "Letter not found — Scholar in Chambers",
    };
  }

  return {
    title: `${letter.title} — Letters from Chambers`,
    description: letter.excerpt,
  };
}

export default async function LetterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const letter = getLetterBySlug(slug);

  if (!letter) {
    notFound();
  }

  const { previous, next } = getAdjacentLetters(slug);

  return (
    <article className="page-section letter-detail-page">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <Link href="/">Scholar in Chambers</Link>
        <span>/</span>
        <Link href="/letters-from-chambers">Letters from Chambers</Link>
        <span>/</span>
        <span>{letter.category}</span>
      </nav>

      <header className="letter-detail-hero">
        <p className="eyebrow">{letter.category}</p>
        <h1>{letter.title}</h1>
        <p className="letter-detail-excerpt">{letter.excerpt}</p>
        <div className="letter-detail-meta">
          <span>{letter.date}</span>
          <span>{letter.readTime}</span>
          <span>Public correspondence</span>
        </div>
      </header>

      <section className="letter-body-card">
        <p className="letter-salutation">{letter.salutation}</p>
        {letter.sections.map((section) => (
          <section className="letter-body-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <p className="letter-closing">From chambers, with judgment and public regard.</p>
      </section>

      <section className="editorial-note letter-editorial-note">
        <p className="eyebrow">Editorial note</p>
        <p>{editorialDisclaimer}</p>
      </section>

      <NewsletterSignup />

      <nav className="letter-pagination" aria-label="Letters navigation">
        {previous ? (
          <Link className="pagination-card" href={`/letters-from-chambers/${previous.slug}`}>
            <span>Previous letter</span>
            <strong>{previous.title}</strong>
          </Link>
        ) : (
          <div className="pagination-card muted-card">
            <span>Previous letter</span>
            <strong>Beginning of the archive</strong>
          </div>
        )}

        {next ? (
          <Link className="pagination-card" href={`/letters-from-chambers/${next.slug}`}>
            <span>Next letter</span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <div className="pagination-card muted-card">
            <span>Next letter</span>
            <strong>More letters to follow</strong>
          </div>
        )}
      </nav>

      <div className="section-action centered-action">
        <Link className="button secondary" href="/letters-from-chambers">Back to Letters Archive</Link>
      </div>
    </article>
  );
}
