import { useEffect, useState } from "react";
import { animeTop } from "../API/apiBase";

export const useTopFetch = () => {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTop = async () => {
    try {
      setLoading(true)
      const data = await animeTop.get("top/anime/1/upcoming");
      const result = await data.data.top;
      setLoading(false)
      setTop(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTop();
  }, []);
  return [top, loading];
};
