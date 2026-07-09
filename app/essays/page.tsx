import { EssayCards } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Essays — Scholar in Chambers",
  description: "Essays on law, institutions, public meaning, technology, evidence, and trust.",
};

export default function EssaysPage() {
  return (
    <section className="page-section">
      <div className="page-hero compact">
        <p className="eyebrow">The archive</p>
        <h1>Essays from the chamber desk</h1>
        <p>
          These essays are designed to convert scattered thoughts into public doctrine: careful enough for lawyers, accessible enough for citizens, and ambitious enough for builders.
        </p>
      </div>
      <SectionHeading eyebrow="Library" title="Current essay architecture">
        Replace these starter entries with your finished essays as the platform grows.
      </SectionHeading>
      <EssayCards />
    </section>
  );
}
