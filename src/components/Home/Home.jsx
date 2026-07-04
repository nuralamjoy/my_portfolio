import { useState, useEffect, useRef } from "react";
import "./Home.css";

const ROLES = [
  "Competitive Programmer",
  "Software Engineer",
  "AI/ML Research Enthusiast",
  "Open Source Contributor",
];

const SOCIALS = [
  { href: "https://github.com", label: "GH", title: "GitHub" },
  { href: "https://codeforces.com", label: "CF", title: "Codeforces" },
  { href: "https://leetcode.com", label: "LC", title: "LeetCode" },
  { href: "https://codechef.com", label: "CC", title: "CodeChef" },
  { href: "https://atcoder.jp", label: "AC", title: "AtCoder" },
  { href: "https://kaggle.com", label: "KG", title: "Kaggle" },
  { href: "https://linkedin.com", label: "LI", title: "LinkedIn" },
];

function useTypewriter(
  words,
  { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {},
) {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    const tick = () => {
      const current = words[wordIndex.current % words.length];
      let delay;

      if (!deleting.current) {
        charIndex.current += 1;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          delay = pause;
        } else {
          delay = typeSpeed;
        }
      } else {
        charIndex.current -= 1;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current += 1;
        }
        delay = deleteSpeed;
      }

      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

export default function Home() {
  const typedText = useTypewriter(ROLES);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="home">
      <div className="grid-ov"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div className={`hero-l fi ${visible ? "vis" : ""}`}>
            <div className="hero-badge">
              🏆 ICPC Asia Dhaka Regional Finalist
            </div>
            <h1 className="hero-name">
              <span>Nur Alam</span>
              <br />
              <span className="gn">Joy</span>
            </h1>
            <div className="hero-type">
              <span>{typedText}</span>
              <span className="cursor"></span>
            </div>
            <p className="hero-desc">
              Passionate competitive programmer and research enthusiast from
              Bangladesh. Solving 2000+ algorithmic problems, building impactful
              software, and exploring the frontiers of AI &amp; ML research.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-p">
                📬 Get In Touch
              </a>
              <a href="#projects" className="btn-o">
                🚀 View Projects
              </a>
            </div>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc"
                  title={s.title}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`hero-r fi ${visible ? "vis" : ""}`}
            style={{ transitionDelay: "0.18s" }}
          >
            <div className="av-wrap">
              <div className="av-ring1"></div>
              <div className="av-ring2"></div>
              <div className="av-ring3"></div>
              <div className="av-main">
                <span className="av-initials">NAJ</span>
              </div>
              <div className="chip chip1">🏆 ICPC Finalist</div>
              <div className="chip chip2">⚡ 2000+ Solved</div>
              <div className="chip chip3">🔬 Researcher</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
