import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader/Loader.jsx";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import ParticleCanvas from "./components/ParticleCanvas/ParticleCanvas.jsx";
import Nav from "./components/Header/Nav.jsx";
import Background from "./components/BodyBackground/Background.jsx"
import Toast from "./components/Toast/Toast.jsx";

const SECTION_IDS = [
  "home",
  "about",
  "news",
  "projects",
  "skills",
  "cp",
  "blogs",
  "education",
  "contact",
];

export default function App() {
  const [loaderOut, setLoaderOut] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dark, setDark] = useState(true);
  const [toastMsg, setToastMsg] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const toastTimer = useRef(null);

  // Loader timing — mirrors the original 2.9s splash before revealing content
  useEffect(() => {
    const t = setTimeout(() => {
      setLoaderOut(true);
      setStartTyping(true);
    }, 2900);
    return () => clearTimeout(t);
  }, []);

  // Scroll progress bar + navbar background + active-section highlighting
  useEffect(() => {
    function onScroll() {
      const sc = document.documentElement.scrollTop;
      const ht =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(ht > 0 ? (sc / ht) * 100 : 0);
      setScrolled(sc > 60);

      let cur = "home";
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && sc >= el.offsetTop - 110) cur = id;
      });
      setActiveSection(cur);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme toggle reflected on the <html> tag so CSS variables swap
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToastMsg(msg);
    setToastShow(true);
    toastTimer.current = setTimeout(() => setToastShow(false), 3500);
  };

  return (
    <>
      <Loader out={loaderOut} />
      <ScrollProgress progress={progress} />
      <ParticleCanvas />
      
      <Background></Background>

      <Toast message={toastMsg} show={toastShow} />

      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />

      
    </>
  );
}
