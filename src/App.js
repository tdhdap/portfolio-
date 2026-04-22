import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h2 className="logo">Tharun's Portfolio</h2>
          <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Projects
            </NavLink>
          </div>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
