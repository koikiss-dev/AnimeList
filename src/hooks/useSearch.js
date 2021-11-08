import { useState, useEffect, useCallback } from "react";
import { animeData } from "../API/apiBase";
export const useSearch = () => {
  const [value, setValue] = useState([]);
  const [anime, setAnime] = useState("");
  
  const SearchAnime = (e) => {
    setAnime(e.target.value);
  };
  const getData = useCallback(async () => {
   try{
      const data = await animeData
      .get(
        anime === ""
          ? "anime?q=one piece"
          : encodeURI(`anime?q=${anime}`)
      )
      setValue(data.data.results);
   }catch(error){
     console.log(error)
   }
  }, [anime]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, anime];
};
