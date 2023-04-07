import React, { useState } from "react";
import "./styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  return (
    <div>
      <Router>
        <div className="mobile-header-container">
          <Header
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          ></Header>
        </div>
        <div>
          <main>
            <Routes>
              <Route path="/About" element={<About />} />
            </Routes>
            <Routes>
              <Route path="/Resume" element={<Resume />} />
            </Routes>
            <Routes>
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
        </div>
        <div className="mobile-footer">
          <Footer>© {new Date().getFullYear()}, Built with React</Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
