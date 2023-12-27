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
        <div className="main-content bg-um bg-cover bg-bottom bg-no-repeat">
          <div className="px-[50px] py-[60px] bg-gray-200 w-full h-full bg-opacity-70">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
