import { ChamberCards } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Chambers — Scholar in Chambers",
  description: "The four intellectual rooms of Scholar in Chambers.",
};

export default function ChambersPage() {
  return (
    <section className="page-section">
      <div className="page-hero compact">
        <p className="eyebrow">The structure</p>
        <h1>A chamber is a discipline of attention</h1>
        <p>
          The site is arranged like an intellectual chamber: each room receives a different kind of thought, but all rooms share one standard — clarity with responsibility.
        </p>
      </div>
      <SectionHeading eyebrow="Rooms" title="The four chambers" />
      <ChamberCards />
      <div className="wide-note">
        <h2>The deeper design</h2>
        <p>
          This structure prevents the site from becoming a random blog. It gives every future essay a home, every doctrine a shelf, and every public note a reason for existing.
        </p>
      </div>
    </section>
  );
}
