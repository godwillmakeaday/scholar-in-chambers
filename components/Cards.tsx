import { chambers, essays } from "@/lib/content";

export function ChamberCards() {
  return (
    <div className="card-grid">
      {chambers.map((room) => (
        <article className="premium-card" key={room.title}>
          <p className="card-eyebrow">{room.eyebrow}</p>
          <h3>{room.title}</h3>
          <p>{room.description}</p>
          <span>{room.signal}</span>
        </article>
      ))}
    </div>
  );
}

export function EssayCards({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? essays.slice(0, limit) : essays;
  return (
    <div className="essay-list">
      {list.map((essay, index) => (
        <article className="essay-card" key={essay.title}>
          <div className="essay-number">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <p>{essay.category} · {essay.readTime}</p>
            <h3>{essay.title}</h3>
            <span>{essay.excerpt}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
