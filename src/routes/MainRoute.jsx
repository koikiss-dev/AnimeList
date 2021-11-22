import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimeCharacter from "../pages/AnimeCharacter";
import AnimePage from "../pages/AnimePage";
import HomePage from "../pages/HomePage";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
          
      </Route>
      <Route path="/anime" element={<AnimePage />}>
        <Route path=":animeId" element={<AnimeCharacter />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
