import React from 'react'
import './App.css'

import Nav from "./components/Header/Nav.jsx";

const App = () => {
  return (
    <>
      {/* <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      /> */}
      {/* <Background></Background> */}
      <Nav></Nav>
      
    </>
  );
}

export default App