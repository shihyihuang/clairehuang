import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { NavBar } from "./components/nav-bar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="App"
      onClick={() => {
        isOpen && setIsOpen(!isOpen);
      }}>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isOpen ? " opacity-10" : "opacity-100"
        }`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
