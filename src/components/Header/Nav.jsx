import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👤" },
  { href: "#news", label: "Activities", icon: "📰" },
  { href: "#projects", label: "Projects", icon: "🚀" },
  { href: "#skills", label: "Skills", icon: "💡" },
  {
    href: "#cp",
    label: "CP",
    icon: "🏆",
    mobileLabel: "Competitive Programming",
  },
  { href: "#blogs", label: "Blogs", icon: "✍️" },
  { href: "#education", label: "Education", icon: "🎓" },
  { href: "#contact", label: "Contact", icon: "📬" },
];

export default function Navbar({
  scrolled,
  activeSection,
  dark,
  onToggleTheme,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMob = () => setMobileOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-i">
          <a href="#home" className="nav-logo">
            &lt;NAJ/&gt;
          </a>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.slice(1) ? "active" : ""}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-r">
            <button
              className="btn-theme"
              aria-label="Toggle theme"
              title="Toggle theme"
              onClick={onToggleTheme}
            >
              {dark ? "🌙" : "☀️"}
            </button>
            <button
              className={`btn-ham ${mobileOpen ? "open" : ""}`}
              aria-label="Open menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <nav className={`mob-nav ${mobileOpen ? "show" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMob}>
            {l.icon} {l.mobileLabel || l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
