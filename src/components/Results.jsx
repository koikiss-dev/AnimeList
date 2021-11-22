import ResultMain from "./ResultMain";
import styled from "styled-components";
/* import { useParams } from "react-router-dom"; */
/*///////////////////////////////////////*/

import Nav from "../components/Nav";
import { useSearch } from "../hooks/useSearch";

const ContentMain = styled.main`
  margin: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;
const Results = () => {
  const [value, getData, SearchAnime] = useSearch();
  return (
    <>
      <Nav func={SearchAnime} />
      <ContentMain>
        {value
          .map(({ mal_id, image_url, title, score, synopsis }) => {
            return (
              <ResultMain
                key={mal_id}
                src_img={image_url}
                title={title}
                score={score}
                synopsis={synopsis}
                id={mal_id}
              />
            );
          })
          .slice(0, 15)}
      </ContentMain>
    </>
  );
};

export default Results;
