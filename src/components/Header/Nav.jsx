import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dark, setDark] = useState(true);

  const links = [
    "Home",
    "About",
    "Activities",
    "Projects",
    "Skills",
    "CP",
    "Blogs",
    "Education",
    "Contact",
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= Navbar ================= */}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll
            ? "bg-[#060818]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-[70px] px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent"
          >
            &lt;NAJ/&gt;
          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-2">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-violet-300 hover:bg-violet-500/10 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            {/* Theme */}

            <button
              onClick={() => setDark(!dark)}
              className="hidden lg:flex w-10 h-10 items-center justify-center rounded-xl border border-violet-500/20 hover:bg-violet-500/10 transition"
            >
              {dark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-violet-300" />
              )}
            </button>

            {/* Hire Me */}

            <button className="hidden lg:block bg-gradient-to-r from-violet-600 to-purple-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition">
              Hire Me
            </button>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`lg:hidden fixed top-[70px] left-0 w-full bg-[#060818]/95 backdrop-blur-xl overflow-hidden transition-all duration-300 z-40 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-violet-500/10 hover:text-violet-300 transition"
              >
                {item}
              </a>
            </li>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="mt-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-xl"
          >
            Hire Me
          </button>
        </ul>
      </div>
    </>
  );
};

export default Nav;
