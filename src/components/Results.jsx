import ResultMain from "./ResultMain";
import styled from "styled-components";
/* import { useParams } from "react-router-dom"; */
/*///////////////////////////////////////*/
import logo from "../img/logoo.svg";
import { useSearch } from "../hooks/useSearch";
import Search from "./Search";
const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-header);
  padding: 10px;
`;
const LogoInfo = styled.div`
  display: flex;
`;
const Title = styled.h1`
  color: #ffff;
`;
const Logo = styled.img`
  max-width: 50px;
  margin: 0 0 0 10px;
`;
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
      <ContainerHeader>
        <LogoInfo>
          <Title>AnimeList</Title>
          <Logo src={logo} alt="logo" />
        </LogoInfo>
        <Search funcSearch={SearchAnime} />
      </ContainerHeader>
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
