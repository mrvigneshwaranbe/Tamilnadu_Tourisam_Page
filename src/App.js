import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PlaceToVisit from "./components/places/PlaceToVisit";
import TimeToVisit from "./components/timeToVisit/places/TimeToVisit";
import Home from "./components/Home";
import Food from "./components/Food/Food";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-visit" element={<PlaceToVisit />} />
        <Route path="/timeToVisit" element={<TimeToVisit />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
