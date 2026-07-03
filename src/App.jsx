import React from 'react'
import './App.css'
import Nav from './components/Header/Nav'
import Background from './components/BodyBackground/Background';
import Home from './components/Home/Home';


const App = () => {
  return (
    <>
    
      <Background></Background>
      <Nav></Nav>
      <Home></Home>
      
    </>
  );
}

export default App