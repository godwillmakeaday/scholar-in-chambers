import Link from "next/link";
import { futureChambers, letterCategories, lettersBrand, sampleLetters } from "@/lib/content";

export function CategoryCards() {
  return (
    <div className="letter-category-grid">
      {letterCategories.map((category) => (
        <article className="category-card" key={category.title}>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </article>
      ))}
    </div>
  );
}

export function LetterCards({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? sampleLetters.slice(0, limit) : sampleLetters;

  return (
    <div className="letter-archive-grid" id="letter-archive">
      {list.map((letter) => (
        <Link className="letter-card linked-card" href={`/letters-from-chambers/${letter.slug}`} key={letter.slug}>
          <article>
            <div>
              <p className="letter-meta">{letter.category} · {letter.readTime}</p>
              <h3>{letter.title}</h3>
              <p>{letter.excerpt}</p>
            </div>
            <span className="letter-status">{letter.status}</span>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function NewsletterSignup() {
  return (
    <section className="newsletter-panel" id="subscribe" aria-labelledby="letters-subscribe-title">
      <div>
        <p className="eyebrow">Subscribe</p>
        <h2 id="letters-subscribe-title">Receive the next letter from chambers</h2>
        <p>
          A placeholder subscription desk for now. It can later be connected to your preferred newsletter tool, CRM, or backend.
        </p>
      </div>
      <form className="newsletter-form">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <button className="button primary" type="button">Subscribe to Letters</button>
        <small>No spam. Only serious letters, reflections, and public notes from chambers.</small>
      </form>
    </section>
  );
}

export function ChamberVerticalCards() {
  return (
    <div className="vertical-grid">
      {futureChambers.map((vertical) => (
        <article className="vertical-card" key={vertical.title}>
          <h3>{vertical.title}</h3>
          <p>{vertical.description}</p>
        </article>
      ))}
    </div>
  );
}

export function LettersHomeSection() {
  return (
    <section className="letters-home-section">
      <div className="letters-home-copy">
        <p className="eyebrow">Correspondence</p>
        <h2>{lettersBrand.name}</h2>
        <p className="large-copy">{lettersBrand.subtitle}</p>
        <p>{lettersBrand.summary}</p>
        <p className="architecture-line">{lettersBrand.architecture}</p>
        <div className="hero-actions">
          <Link className="button primary" href="/letters-from-chambers">Enter Letters from Chambers</Link>
          <Link className="button secondary" href={`/letters-from-chambers/${sampleLetters[0].slug}`}>Read latest letter</Link>
        </div>
      </div>
      <aside className="letters-home-card" aria-label="Letters from Chambers identity note">
        <p>Paul Magaji Brand</p>
        <h3>Scholar in Chambers</h3>
        <span>→ Letters from Chambers</span>
        <small>→ Future specialist chambers</small>
        <div className="correspondence-mark">✉</div>
      </aside>
    </section>
  );
}
