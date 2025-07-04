import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Apply from "./pages/Apply";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Router>
        <nav className="flex items-center justify-between px-8 py-4 bg-blue-700 text-white w-full">
          <div className="font-bold text-xl">CollegeConnect</div>
          <div className="space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
            <Link to="/apply" className="hover:underline">
              Apply
            </Link>
            <Link to="/admin" className="hover:underline">
              Login
            </Link>
          </div>
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
