import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
export const useTitle = ({ titleDOC }) => {
  const prevTitle = useRef("AnimeList");
  useEffect(() => {
    const previus = prevTitle.current;
    <Helmet>
      <title>AnimeList | {titleDOC}</title>
    </Helmet>;
    return () => {
      <Helmet>
        <title>AnimeList</title>
      </Helmet>;
    };
  }, [titleDOC]);
};
