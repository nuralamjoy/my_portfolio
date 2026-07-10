import { FaBrain } from "react-icons/fa";

const FocusArea = () => {
  return (
    <section className="focus-area max-w-[1200px] px-[32px] py-[60px] m-auto bg-[#050010] rounded-[20px]">
      <div className="focus-body">
        <div className="focus-header">title======</div>

        <div className="focus-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div
            className=" 
    fa-card
    group
    bg-[var(--card)]
    rounded-2xl
    border border-[var(--border)]
    px-6 py-8
    transition-all
    duration-300
    ease-in-out
    hover:border-[var(--border2)]
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
  "
          >
            {/* Upper */}
            <div className="flex justify-between items-start mb-5">
              {/* Icon */}
              <div
                className="
        w-12 h-12
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur-md
        flex items-center justify-center
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:bg-violet-500/10
        group-hover:border-violet-400/30
      "
              >
                <FaBrain className="text-2xl text-violet-400 transition-transform duration-300 group-hover:rotate-6" />
              </div>

              {/* Badge */}
              <span
                className="
        text-[11.5px]
        tracking-[0.02em]
        text-[var(--txt3)]
        px-3
        py-[5px]
        border
        border-[var(--border)]
        rounded-xl
        whitespace-nowrap
        transition-all
        duration-300
        group-hover:text-[var(--txt)]
        group-hover:border-[var(--border2)]
        group-hover:bg-white/5
      "
              >
                AI / Core
              </span>
            </div>

            {/* Title */}
            <h3
              className="
      mb-3
      text-[19px]
      font-bold
      tracking-[-0.01em]
      text-[var(--txt)]
      transition-colors
      duration-300
      group-hover:text-violet-400
    "
            >
              Artificial Intelligence
            </h3>

            {/* Description */}
            <p
              className="
      text-[14.5px]
      leading-7
      text-[var(--txt3)]
      transition-colors
      duration-300
      group-hover:text-[var(--txt2)]
    "
            >
              Exploring intelligent systems and AI-powered solutions for
              real-world problems.
            </p>
          </div>

          <div className="fa-card">
            <div className="fa-card-upper">
              <div className="fa-card-icon">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
                  <FaBrain className="text-3xl text-violet-400" />
                </div>
                <span>Ai/Core</span>
              </div>
            </div>
            <h3 className="fa-card-title">Artificial Intelligence</h3>
            <p className="fa-card-desc">
              Exploring intelligent systems and AI-powered solutions for
              real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusArea;
