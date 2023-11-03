import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home.jsx"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
