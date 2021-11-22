import React from "react";
import { useParams, useLocation } from "react-router-dom";
const AnimeCharacter = () => {
  let { animeId } = useParams();
  const g = useLocation();
  console.log(g);
  return (
    <div style={{
        color: '#fff'
    }} >
      <h1>{animeId} </h1>
    </div>
  );
};

export default AnimeCharacter;
