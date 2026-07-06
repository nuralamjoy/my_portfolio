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

export default function AboutMe() {
  const ref = useReveal();

  return (
    <section id="about" className="sec" ref={ref}>
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
        </div>
      </div>
    </section>
  );
}
