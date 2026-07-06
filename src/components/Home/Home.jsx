import { useEffect, useState } from "react";
import "./Home.css";

const TITLES = [
  "Computer Science Student",
  "Competitive Programmer",
  "Research Enthusiast",
  "ICPC Regional Finalist",
  "Algorithm Designer",
  "President of PUCC",
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

export default function Home({ startTyping }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!startTyping) return;
    let ti = 0;
    let ci = 0;
    let del = false;
    let timeoutId;

    function tick() {
      const t = TITLES[ti];
      if (del) {
        ci--;
        setText(t.slice(0, ci));
        if (ci === 0) {
          del = false;
          ti = (ti + 1) % TITLES.length;
        }
        timeoutId = setTimeout(tick, 48);
      } else {
        ci++;
        setText(t.slice(0, ci));
        if (ci === t.length) {
          timeoutId = setTimeout(() => {
            del = true;
            tick();
          }, 2200);
          return;
        }
        timeoutId = setTimeout(tick, 88);
      }
    }
    tick();

    return () => clearTimeout(timeoutId);
  }, [startTyping]);

  return (
    <section id="home">
      <div className="grid-ov"></div>
      <div className="Home">
        <div className="home-grid">
          <div className="home-l fi vis">
            <div className="home-badge">
              🏆 ICPC Asia Dhaka Regional Finalist
            </div>
            <h1 className="home-name">
              <span>Nur Alam</span>

              <span className="gn"> Joy</span>
            </h1>
            <div className="home-type">
              <span>{text}</span>
              <span className="cursor"></span>
            </div>
            <p className="home-desc">
              Passionate competitive programmer and research enthusiast from
              Bangladesh. Solving 2000+ algorithmic problems, building impactful
              software, and exploring the frontiers of AI &amp; ML research.
            </p>
            <div className="home-cta">
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

          <div className="home-r fi vis  " style={{ transitionDelay: "0.18s" }}>
            <div className="av-wrap hidden md:block">
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
