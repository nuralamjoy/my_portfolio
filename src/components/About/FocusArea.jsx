import { FaBrain } from "react-icons/fa";

const FocusArea = () => {
  return (
    <section className="focus-area max-w-[1200px] px-[32px] py-[60px] m-auto bg-[#050010] rounded-[20px]">
      <div className="focus-body">
        <div className="focus-header">title======</div>

        <div className="focus-card">
          <div className="fa-card">
            <div className="fa-card-upper">
              <div className="fa-card-icon">
                <FaBrain />
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
