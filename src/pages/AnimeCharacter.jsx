import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import { Helmet } from "react-helmet";
import { animeTop } from "../API/apiBase";
import AnimeInfo from "../components/AnimeInfo";
import GoBackButton from "../components/GoBackButton";
const AnimeCharacter = () => {
  let { animeId } = useParams();
  const [state, setstate] = useState([]);
  const [loading, setLoading] = useState(false);


  const get = async (idAnime) =>{
    try{
      setLoading(true)
      const {data} = await animeTop.get(`anime/${idAnime}`)
      setLoading(false)
      setstate([data])
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    get(animeId)
  }, [animeId])
  return (
    <>
      <Helmet>
        <title>AnimeList | {animeId} </title>
      </Helmet>
      <GoBackButton />
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
      {state.map(({ image_url, title, mal_id, synopsis, type, trailer_url }) => {
        return (
          <AnimeInfo
            key={mal_id}
            title={title}
            img={image_url}
            desc={synopsis}
            type_result={type}
            trailer={trailer_url}
          />
        );
      })}
    </>
  );
};

export default AnimeCharacter;
