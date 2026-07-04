import { useState, useEffect, useCallback } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#home", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👤" },
  { href: "#news", label: "Activities", icon: "📰" },
  { href: "#projects", label: "Projects", icon: "🚀" },
  { href: "#skills", label: "Skills", icon: "💡" },
  { href: "#cp", label: "CP", icon: "🏆" },
  { href: "#blogs", label: "Blogs", icon: "✍️" },
  { href: "#education", label: "Education", icon: "🎓" },
  { href: "#contact", label: "Contact", icon: "📬" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((o) => !o);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-i">
          <a href="#home" className="nav-logo">
            &lt;NAJ/&gt;
          </a>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-r">
            <button
              className="btn-theme"
              aria-label="Toggle theme"
              title="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <button
              className={`btn-ham ${mobileOpen ? "open" : ""}`}
              aria-label="Open menu"
              onClick={toggleMobile}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <nav className={`mob-nav ${mobileOpen ? "show" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.icon} {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
