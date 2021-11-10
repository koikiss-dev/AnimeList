import { useState, useEffect, useCallback } from "react";
import { animeData } from "../API/apiBase";
import useHistory from "./useHistory";
export const useSearch = () => {
  const [value, setValue] = useState([]);
  const [anime, setAnime] = useState("");
  const [setName, name, nombre, setItem, item] = useHistory();
  const SearchAnime = (e) => {
    setAnime(e.target.value);
    setName(e.target.value);
  };
  const getData = useCallback(async () => {
    try {
      const data = await animeData.get(
        encodeURI(`anime?q=${name}`)
      );
      setValue(data.data.results);
      setItem(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [name, setItem]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, anime];
};
