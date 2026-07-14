import "./QuickFacts.css";
import Card from "../ui/Card";
const FACTS = [
  {
    icon: "🏆",
    title: "ICPC Dhaka Regional Finalist",
    sub: "Top-tier collegiate programming contest",
  },
  {
    icon: "⭐",
    title: "Codeforces Specialist",
    sub: "Rated competitive programmer",
  },
  {
    icon: "💻",
    title: "2000+ Problems Solved",
    sub: "Across online judges & contests",
  },
  {
    icon: "🌐",
    title: "MERN Stack Developer",
    sub: "End-to-end product engineering",
  },
  {
    icon: "🤖",
    title: "AI Research",
    sub: "Reading papers, building models",
  },
  {
    icon: "🎓",
    title: "CSE Undergraduate",
    sub: "Premier University, Chittagong",
  },
];

export default function QuickFacts() {
  return (
    <section id="facts" className=" px-4 py-16 sm:px-6 lg:px-8 ">
      <div
        className="facts-body  mx-auto max-w-[1200px] bg-[#12001c8d]  rounded-[20px]
       border border-[#3f019d46] py-[80px] px-[32px]"
      >
        <div className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
          Quick Facts
        </div>
        <h2 className="mb-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
          Snapshot of where I stand
        </h2>
        <p className="mb-10 max-w-xl text-sm text-neutral-400 sm:text-base">
          A fast read for recruiters and supervisors scanning for signal.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((fact, i) => (
            <div
              key={i}
              className="
                group rounded-2xl border border-white/10 bg-[#15122B]
                p-6 backdrop-blur-md
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:border-[#8B5CF6]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(124,92,255,0.15)]
              "
            >
              <span className="mb-3.5 inline-block text-2xl sm:text-[26px]">
                {fact.icon}
              </span>
              <div className="mb-1.5 font-serif text-base font-semibold text-white sm:text-[16.5px]">
                {fact.title}
              </div>
              <div className="font-mono text-xs text-neutral-400 sm:text-[13px]">
                {fact.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
