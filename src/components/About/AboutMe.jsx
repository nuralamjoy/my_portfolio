import useReveal from "../../hooks/useReveal";
import "./AboutMe.css";

const INFO = [
  { label: "Name", value: "Nur Alam Joy" },
  { label: "Role", value: "CS Student & Researcher" },
  { label: "Location", value: "Bangladesh 🇧🇩" },
  { label: "Club Position", value: "President, PUCC" },
  { label: "Specialization", value: "Algorithms & AI/ML" },
  { label: "Status", value: "✅ Open to Opportunities", highlight: true },
];

const TAGS = [
  "Competitive Programming",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Graph Algorithms",
  "Data Structures",
];

const profile = [
  {
    key: "name",
    value: "Nur Alam Joy",
  },
  {
    key: "university",
    value: "Premier University, Chittagong",
  },
  {
    key: "department",
    value: "Computer Science & Engineering",
  },
  {
    key: "focus",
    value: "AI/ML Research, MERN Development",
  },
  {
    key: "availability",
    value: "Open to research & internship roles",
  },
];

const stats = [
  {
    value: "2000+",
    label: "SOLVED",
  },
  {
    value: "Specialist",
    label: "CODEFORCES",
  },
  {
    value: "Regional",
    label: "ICPC DHAKA",
  },
];

export default function AboutMe() {
  const ref = useReveal();

  return (
    <>
      <div className="about-me-root">
        {/* ================= HERO ================= */}
        <section className="hero relative overflow-visible" id="about">
          {/* Thin Border */}
          <div
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[90%]
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-violet-400/70
      to-transparent
    "
          />

          {/* Center Glow */}
          <div
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-44
      h-[1px]
      bg-cyan-300/90
      blur-sm
    "
          />

          {/* Extra Soft Glow */}
          <div
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-64
      h-6
      bg-cyan-400/30
      blur-2xl
    "
          />

          <div className="hero-grid">
            <div className="hero-left reveal ">
              <h1 className="hero-title">ABOUT ME</h1>
              <div className="hero-desc">
                <p>
                  I'm <strong className="ab-strong">Nur Alam Joy</strong>, a
                  Computer Science student with a deep passion for competitive
                  programming, algorithm design, and AI research. My journey
                  began with curiosity and evolved into a lifelong pursuit of
                  excellence.
                </p>
                <p>
                  As <strong className="ab-strong-p">President of PUCC</strong>,
                  I lead initiatives inspiring fellow students to explore
                  technology and competitive programming — organizing workshops,
                  hackathons, and inter-university contests.
                </p>
                <p>
                  My CP journey led me to the{" "}
                  <strong className="ab-strong-p">
                    ICPC Asia Dhaka Regional
                  </strong>{" "}
                  as a finalist. I've participated in 10+ IUPCs, solved 2000+
                  problems, and I'm currently exploring research in Computer
                  Vision and NLP.
                </p>
              </div>
              <div className="hero-actions">
                <a href="#focus" className="btn btn-primary">
                  <span className="magnet">View Current Work</span>
                </a>
                <a href="#timeline" className="btn btn-ghost glass">
                  <span className="magnet">Achievement Timeline</span>
                </a>
              </div>
            </div>

            {/* ========right section json style====== */}

            <div className="hero-right reveal ">
              <div className="glass judge-card card-tilt">
                <div className="judge-topbar">
                  <div className="traffic">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="judge-path">~/profile/about.json</div>
                </div>
                <div className="judge-body">
                  {/* =====JSON Data========== */}
                  <div className="JsonData relative font-mono text-sm">
                    {profile.map((item) => (
                      <div
                        key={item.key}
                        className="flex flex-wrap items-start gap-3"
                      >
                        <span className="text-[#8b7cf6]">"{item.key}"</span>

                        <span className="text-white/40">:</span>

                        <span className="text-cyan-400 ">"{item.value}"</span>
                      </div>
                    ))}
                    <span className="cursor-blink"></span>
                  </div>
                  <div className="verdict">
                    Status: Accepted — Actively Building
                  </div>
                </div>
                <div className="judge-footer">
                  <div className="mini-stat">
                    <b>2000+</b>
                    <span>Solved</span>
                  </div>
                  <div className="mini-stat">
                    <b>Specialist</b>
                    <span>Codeforces</span>
                  </div>
                  <div className="mini-stat">
                    <b>Regional</b>
                    <span>ICPC Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
