import "./Background.css";

export default function Background() {
  return (
    <div className="background">
      {/* ===================== */}
      {/* Base Background */}
      {/* ===================== */}
      <div className="bg-base"></div>

      {/* ===================== */}
      {/* Aurora */}
      {/* ===================== */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      {/* ===================== */}
      {/* Ambient Lighting */}
      {/* ===================== */}
      <div className="ambient ambient1"></div>
      <div className="ambient ambient2"></div>

      {/* ===================== */}
      {/* Perspective Grid */}
      {/* ===================== */}
      <div className="grid-wrapper">
        <div className="grid"></div>
      </div>

      {/* ===================== */}
      {/* Glow Orbs */}
      {/* ===================== */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="orb orb4"></div>

      {/* ===================== */}
      {/* Noise */}
      {/* ===================== */}
      <div className="noise"></div>

      {/* ===================== */}
      {/* Vignette */}
      {/* ===================== */}
      <div className="vignette"></div>
    </div>
  );
}
