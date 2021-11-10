import { useState, useEffect } from "react";

const useHistory = () => {
  const nombre = () => {
    const animeData = localStorage.getItem("data");
    return animeData ? JSON.parse(animeData) : ["one piece"];
  };
  const animeValues = () => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  };
  const [name, setName] = useState(nombre);
  const [item, setItem] = useState(animeValues);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(name));
    localStorage.setItem("items", JSON.stringify(item));
    return () => {};
  }, [name, item]);
  return [setName, name, nombre, setItem, item];
};

export default useHistory;
