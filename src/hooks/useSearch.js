import {useEffect, useCallback } from "react";
import { animeData } from "../API/apiBase";
import {useSearchParams} from "react-router-dom";
import useLocalStorage from 'use-local-storage'
export const useSearch = () => {
  const [value, setValue] = useLocalStorage("items", []);
  const [searchParams, setSearchParams] = useSearchParams("one piece")
  const [title, setTitle] = useLocalStorage("title", "one piece" );
  
  const SearchAnime = (e) => {
    setTitle(e.target.value);
    setSearchParams({search: e.target.value})
  };
  const getData = useCallback(async () => {
    try {
      const data = await animeData.get(
        encodeURI(`anime?q=${searchParams}`)
      );
      setValue(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [setValue, searchParams]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, searchParams, title];
};
