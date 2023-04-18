import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Sermon from "./components/Sermon";
import Staff from "./components/Staff";
import PlanVisit from "./components/PlanVisit";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" exact element ={<Home/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/sermon" element={<Sermon/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/planvisit" element={<PlanVisit/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
