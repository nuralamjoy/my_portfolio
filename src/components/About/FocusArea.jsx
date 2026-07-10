import { FaBrain } from "react-icons/fa";

const FocusArea = () => {
  return (
    <section className="focus-area max-w-[1200px] px-[32px] py-[60px] m-auto bg-[#050010] rounded-[20px]">
      <div className="focus-body">
        <div className="focus-header">title======</div>

        <div className="focus-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="fa-card bg-[var(--card)] rounded-[20px] border border-[var(--border)] px-4 py-6 ">
            <div className="fa-card-upper">
              <div className="fa-card-icon flex justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
                  <FaBrain className="text-3xl text-violet-400" />
                </div>
                <span className=" bg-white/5 border border-white/10 backdrop-blur-md">
                  Ai/Core
                </span>
              </div>
            </div>
            <h3 className="fa-card-title">Artificial Intelligence</h3>
            <p className="fa-card-desc">
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
