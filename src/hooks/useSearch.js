import { useEffect, useCallback, useState } from "react";
import { animeData } from "../API/apiBase";
import { useSearchParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
export const useSearch = () => {
  const [value, setValue] = useState([]);
  const [loadingg, setLoadingg] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("one piece");
  const [title, setTitle] = useLocalStorage("title", "one piece");

  const SearchAnime = (e) => {
    setTitle(e.target.value);
    setSearchParams({ q: e.target.value });
  };
  const getData = useCallback(async () => {
    try {
      setLoadingg(true);
      const data = await animeData.get(encodeURI(`anime?q=${searchParams}`));
      setLoadingg(false);
      setValue(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);
  return [value, getData, SearchAnime, searchParams, title, loadingg];
};
