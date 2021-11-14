import {useEffect, useCallback } from "react";
import { animeData } from "../API/apiBase";
import useLocalStorage from 'use-local-storage'
export const useSearch = () => {
  const [value, setValue] = useLocalStorage("items", []);
  const [anime, setAnime] = useLocalStorage("name", "one piece");
  const SearchAnime = (e) => {
    setAnime(e.target.value);
  };
  const getData = useCallback(async () => {
    try {
      const data = await animeData.get(
        encodeURI(`anime?q=${anime}`)
      );
      setValue(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [setValue, anime]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, anime];
};
