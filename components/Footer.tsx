import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">The signature</p>
        <h2>{site.name}</h2>
        <p>
          A living desk for essays, legal reflections, civic doctrine, serious correspondence, and institution-building imagination.
        </p>
      </div>
      <div className="footer-links grouped">
        <div>
          <p>Publications</p>
          <Link href="/essays">Essays</Link>
          <Link href="/letters-from-chambers">Letters from Chambers</Link>
        </div>
        <div>
          <p>Public Desk</p>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <p className="fine-print">
        © {new Date().getFullYear()} {site.author}. Public reflections only. Nothing on this website is legal advice unless a formal lawyer-client engagement exists.
      </p>
    </footer>
  );
}
