import Link from "next/link";
import { navItems, site } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Scholar in Chambers home">
        <span className="brand-mark">SiC</span>
        <span>
          <strong>{site.name}</strong>
          <small>Legal thought desk</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
