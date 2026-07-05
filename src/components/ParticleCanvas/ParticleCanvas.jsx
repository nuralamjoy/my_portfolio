import { useEffect, useRef } from "react";
import "./ParticleCanvas.css";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    let pts = [];
    let raf;

    function sizeCvs() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    sizeCvs();
    window.addEventListener("resize", sizeCvs);

    for (let i = 0; i < 90; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.4,
        op: Math.random() * 0.45 + 0.08,
      });
    }

    function frame() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cvs.width) p.vx *= -1;
        if (p.y < 0 || p.y > cvs.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.op})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 130) * 0.13})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", sizeCvs);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="cvs" ref={canvasRef}></canvas>;
}
