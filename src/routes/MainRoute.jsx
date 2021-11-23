import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimeCharacter from "../pages/AnimeCharacter";
import AnimePage from "../pages/AnimePage";
import HomePage from "../pages/HomePage";
import NotFound from '../pages/NotFound'
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
          
      </Route>
      <Route path="/anime" element={<AnimePage />}>
        <Route path=":animeId" element={<AnimeCharacter />} />
      </Route>
      <Route path="*" element={<NotFound/>} ></Route>
    </Routes>
  );
};

export default MainRoute;
