import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Helmet } from "react-helmet";
import { animeData } from "../API/apiBase";
import AnimeInfo from "../components/AnimeInfo";
const AnimeCharacter = () => {
  let { animeId } = useParams();
  const [state, setstate] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const get = useCallback(async (animeid) => {
    try {
      setLoading(true);
      const { data } = await animeData.get(encodeURI(`anime?q=${animeid}`));
      const result = await data.results;
      const valueReturn = await result.filter((name) => name.title === animeid);
      setLoading(false);
      setstate(valueReturn);
    } catch (error) {
      get(animeid);
    }
  }, []);
  useEffect(() => {
    get(animeId);
    return () => {
      setstate([""]);
    };
  }, [animeId, get]);
  return (
    <>
      <Helmet>
        <title>AnimeList | {animeId} </title>
      </Helmet>
      <Tippy
        content="go back"
        placement="bottom"
        interactive={true}
        followCursor={true}
        hideOnClick={false}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "var(--color-primary)",
            padding: "1rem",
            borderRadius: "5px",
            top: "10px",
            left: "10px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => navigate(-1)}
        >
          <box-icon name="arrow-back" color="#ffffff"></box-icon>
        </button>
      </Tippy>
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
