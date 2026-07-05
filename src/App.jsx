import { useEffect, useRef, useState } from "react";
import React from "react";
import "./App.css";

import Nav from "./components/Header/Nav.jsx";
import Background from "./components/BodyBackground/Background";

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



const App = () => {
  return (
    <>
      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />

      {/* <Background></Background> */}
    </>
  );
};

export default App;
