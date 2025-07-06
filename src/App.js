import React from "react";
import Home from "./Home";
import FAQ from "./FAQ";
import ErrorP from "./ErrorP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectSection from "./ProjectSection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="*" element={<ErrorP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// /*here we add the componentsss*/
