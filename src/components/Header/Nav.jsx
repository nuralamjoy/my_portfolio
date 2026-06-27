import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Skills", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ====Logo==== */}
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            NurJoy
          </h1>

          {/* ====Desktop Menu==== */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ====Desktop Button==== */}
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Hire Me
          </button>

          {/* ====Mobile Menu Button==== */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ====Mobile Menu==== */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-lg hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
