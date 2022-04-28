import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/main-content/Home";
import About from "./components/main-content/About";
import Contact from "./components/main-content/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Projects from "./components/main-content/Projects";
import History from "./components/main-content/History";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
