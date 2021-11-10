import { useState, useEffect } from "react";

const useHistory = () => {
  const init = () => {
    const animeData = localStorage.getItem("data");
    return animeData ? JSON.parse(animeData) : ["one piece"];
  };
  const [name, setName] = useState(init);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(name));
    return () => {};
  }, [name]);
  return [setName, name, init];
};

export default useHistory;
