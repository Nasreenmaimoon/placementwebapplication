import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Studentlogin from "./components/Home/Studentlogin"
import AdminLogin from "./components/Home/Adminlogin";
import Register1 from "./components/Home/register1";
import Register2 from "./components/Home/register2";
import Projects from "./components/Projects/Projects";
import Register3 from "./components/Home/register3";
import Datalist from "./components/Home/admintable";
import CriteriaLogin from "./components/Home/criterialogin";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Conditionally rendering Navbar */}
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/About" element={<><Navbar /><About /></>}/>
          <Route path="/Projects" element={<><Navbar /><Projects /></>} />
          <Route path="/Studentlogin" element={<Studentlogin />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/register1" element={<Register1 />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/register3" element={<Register3 />} />
          <Route path="/admintable" element={<Datalist />} />
          <Route path="/criterialogin" element={<CriteriaLogin />} />


        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
