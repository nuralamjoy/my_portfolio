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
    <section id="AboutMe" className="sec" ref={ref}>
      <div className="wrap">
        <div className="ab-grid">
          {/* <div className="fi" style={{ position: "relative" }}>
            <div className="ab-img-box">🧑‍💻</div>
            <div className="ab-badge">
              <span className="bn">
                2000<span style={{ fontSize: "1.5rem" }}>+</span>
              </span>
              <span className="bl">Problems Solved</span>
            </div>
          </div> */}
          <div className="fi" style={{ transitionDelay: "0.14s" }}>
            <span className="eyebrow">About Me</span>
            <h2 className="ab-title">
              Passionate Coder.
              <br />
              <span className="ab-grad">Problem Solver.</span>
            </h2>
            <div className="divbar"></div>
            <div className="ab-paras">
              <p>
                I'm <strong className="ab-strong">Nur Alam Joy</strong>, a
                Computer Science student with a deep passion for competitive
                programming, algorithm design, and AI research. My journey began
                with curiosity and evolved into a lifelong pursuit of
                excellence.
              </p>
              <p>
                As <strong className="ab-strong-p">President of PUCC</strong>, I
                lead initiatives inspiring fellow students to explore technology
                and competitive programming — organizing workshops, hackathons,
                and inter-university contests.
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
            <div className="ab-info">
              {INFO.map((i) => (
                <div className="ab-item" key={i.label}>
                  <div className="al">{i.label}</div>
                  <div
                    className="av"
                    style={i.highlight ? { color: "#34d399" } : undefined}
                  >
                    {i.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="tags">
              {TAGS.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ======right segment json style====== */}

          <div className="w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#120d1f] to-[#0b1220] shadow-[0_0_60px_rgba(0,255,255,.05)]">
            {/* Header */}
            <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>

              <span className="font-mono text-sm text-white/30">
                ~/profile/about.json
              </span>
            </div>

            {/* Body */}
            <div className="space-y-8 p-8">
              {/* Logo */}
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-4xl font-extrabold text-[#0d1117] shadow-[0_0_35px_rgba(0,255,255,.25)]">
                NJ
              </div>

              {/* JSON Data */}
              <div className="space-y-4 font-mono text-xl">
                {profile.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-wrap items-start gap-3"
                  >
                    <span className="text-[#8b7cf6]">"{item.key}"</span>

                    <span className="text-white/40">:</span>

                    <span className="text-cyan-400">"{item.value}"</span>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-400 shadow-[0_0_20px_rgba(0,255,255,.1)]">
                <span>✓</span>
                <span>Status: Accepted — Actively Building</span>
              </div>
            </div>

            {/* Footer */}
            <div className="grid grid-cols-1 gap-5 border-t border-white/10 p-8 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5"
                >
                  <h2 className="text-4xl font-bold text-white">
                    {item.value}
                  </h2>

                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
