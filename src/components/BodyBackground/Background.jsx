import "./Background.css";

const stars = Array.from({ length: 80 });

export default function Background() {
  return (
    <div className="background">

      <div className="gradient"></div>

      <div className="grid"></div>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="orb orb4"></div>

      <div className="stars">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
}

// export default Background;
