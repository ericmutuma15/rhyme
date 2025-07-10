
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Apply from "./pages/Apply";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";
import LOGO from './assets/rhymelogo.png';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-white">
      <Router>
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-blue-700 text-white w-full relative">
          <Link to="/home" className="flex items-center gap-2 group">
            <img src={LOGO} alt="Rhyme Logo" className="w-8 h-8 rounded-full border-2 border-white shadow group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl tracking-wide">Rhyme TTI</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="transition-transform duration-150 hover:scale-110">Home</Link>
            <Link to="/about" className="transition-transform duration-150 hover:scale-110">About</Link>
            <Link to="/courses" className="transition-transform duration-150 hover:scale-110">Courses</Link>
            <Link to="/apply" className="transition-transform duration-150 hover:scale-110">Apply</Link>
            <Link to="/admin" className="transition-transform duration-150 hover:scale-110">Login</Link>
          </div>
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-blue-800 focus:outline-none"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Nav Links */}
          {navOpen && (
            <div className="absolute top-full left-0 w-full bg-blue-700 flex flex-col items-center py-4 z-50 md:hidden animate-fade-in">
              <Link to="/" className="py-2 w-full text-center hover:bg-blue-800 transition" onClick={() => setNavOpen(false)}>Home</Link>
              <Link to="/about" className="py-2 w-full text-center hover:bg-blue-800 transition" onClick={() => setNavOpen(false)}>About</Link>
              <Link to="/courses" className="py-2 w-full text-center hover:bg-blue-800 transition" onClick={() => setNavOpen(false)}>Courses</Link>
              <Link to="/apply" className="py-2 w-full text-center hover:bg-blue-800 transition" onClick={() => setNavOpen(false)}>Apply</Link>
              <Link to="/admin" className="py-2 w-full text-center hover:bg-blue-800 transition" onClick={() => setNavOpen(false)}>Login</Link>
            </div>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
