import "./Loader.css";

export default function Loader({ out }) {
  return (
    <div id="loader" className={out ? "out" : ""}>
      <div className="ld-logo">&lt;NAJ/&gt;</div>
      <div className="ld-track">
        <div className="ld-bar"></div>
      </div>
      <div className="ld-text">INITIALIZING PORTFOLIO...</div>
    </div>
  );
}
