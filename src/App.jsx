import React from 'react'
import './App.css'
import Nav from './components/Header/Nav'
const App = () => {
  return (
    <>
      <Nav />
      {/* Dummy Content */}
      <div className="pt-20">
        <section className="h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-5xl font-bold">Home Section</h1>
        </section>

        <section className="h-screen flex items-center justify-center bg-white">
          <h1 className="text-5xl font-bold">About Section</h1>
        </section>

        <section className="h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-5xl font-bold">Projects Section</h1>
        </section>
      </div>
    </>
  );
}

export default App