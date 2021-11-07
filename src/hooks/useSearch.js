import { useState, useEffect, useCallback } from "react";
import { animeData } from "../API/apiBase";
export const useSearch = () => {
  const [value, setValue] = useState([]);
  const [anime, setAnime] = useState("");
  
  const SearchAnime = (e) => {
    setAnime(e.target.value);
  };
  const getData = useCallback(() => {
    animeData
      .get(
        anime === ""
          ? "anime?q=one piece"
          : encodeURI(`anime?q=${anime}`)
      )
      .then((data) => {
        setValue(data.data.results);
        
      });
  }, [anime]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, anime];
};
