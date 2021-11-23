import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { animeData } from "../API/apiBase";
import AnimeInfo from "../components/AnimeInfo";
const AnimeCharacter = () => {
  let { animeId } = useParams();
  const [state, setstate] = useState([]);
  const [loading, setLoading] = useState(false);
  const get = async (animeid) => {
    try {
      setLoading(true);
      const { data } = await animeData.get(encodeURI(`anime?q=${animeid}`));
      const result = await data.results;
      const valueReturn = await result.filter((name) => name.title === animeid);
      setLoading(false);
      setstate(valueReturn);
      /*  console.log(result.find((name) => name.title === animeid)); */
    } catch (error) {
      const { data } = await animeData.get(encodeURI(`anime?q=${animeid}`));
      const result = await data.results;
      const valueReturn = await result.filter((name) => name.title === animeid);
      setLoading(false);
      setstate(valueReturn);
    }
  }; //filter data
  useEffect(() => {
    get(animeId);
    return () => {
      setstate([""]);
    };
  }, [animeId]);
  return (
    <>
      <Helmet>
        <title>AnimeList | {animeId} </title>
      </Helmet>
      {loading ? (
        <div
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0 0 0",
          }}
        >
          <box-icon
            name="loader-alt"
            animation="spin"
            color="#ffffff"
          ></box-icon>
          <p>Cargando… Sea paciente, si es necesario recargue la página</p>
        </div>
      ) : null}
      {state.map(({ image_url, title, mal_id, synopsis, type }) => {
        return (
          <AnimeInfo
            key={mal_id}
            title={title}
            img={image_url}
            desc={synopsis}
            type_result={type}
          />
        );
      })}
    </>
  );
};

export default AnimeCharacter;
