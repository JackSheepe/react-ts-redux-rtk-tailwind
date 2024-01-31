import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="react-ts-redux-rtk-tailwind/" element={<Home />} />
        <Route path="react-ts-redux-rtk-tailwind/fav" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
