import "./Home.css";
import { Mail, ArrowRight, Code2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home" id="home" className=" mt-[80px] ">
      <div className="home-container">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-badge">🏆 ICPC Asia Dhaka Regional Finalist</div>

          <h1 className="hero-title">
            Hi, I'm
            <br />
            <span>Nur Alam Joy</span>
          </h1>

          <h3 className="hero-role">
            Competitive Programmer • Research Enthusiast • Full Stack Developer
          </h3>

          <p className="hero-description">
            Passionate Computer Science student focused on Competitive
            Programming, Artificial Intelligence and Software Development. I
            enjoy solving complex problems and building impactful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>

            <a href="mailto:your@email.com">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="hero-circle">
            <div className="circle-border"></div>

            <div className="profile-card">
              <Code2 size={80} />
              <h2>NAJ</h2>
            </div>

            <div className="floating-card top">🏆 ICPC Finalist</div>

            <div className="floating-card right">⚡ 2000+ Problems</div>

            <div className="floating-card bottom">🔬 AI Research</div>
          </div>
        </div>
      </div>
    </section>
  );
}
