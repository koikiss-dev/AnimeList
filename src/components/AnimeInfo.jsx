import React from "react";
import styled from "styled-components";
const ContainerInfoMain = styled.section`
  color: #ffff;
  padding: 2rem;
  text-align: center;
  @media(min-width: 1000px){
      display: flex;
      flex-flow: column;
      text-align: initial;
  }
`;
const Title = styled.h1`
  @media(min-width: 1000px){
    font-size: 35px;
}
`;
const Img = styled.img`
  border-radius: var(--radius-target);
  margin: 2rem 0;
  width: var(--w-img);
  height: var(--h-img);
  @media(min-width: 1000px){
    max-width: 20%;
}
`;
const SynopsisContainer = styled.div`
@media(min-width: 1000px){
    text-align: initial;
    margin: 0 0 0 5rem;
    width: 35%;
    font-size: 20px;
    line-height: 40px;
}
`;
const ContainerTitleType = styled.div`
@media(min-width: 1000px){
    text-align: center;
}
`;
const ContainerImageDesc = styled.div`
@media(min-width: 1000px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const AnimeInfo = ({ title, img, desc, type_result }) => {
  return (
    <ContainerInfoMain>
      <ContainerTitleType>
        <span>{type_result}</span>
        <Title>{title} </Title>
      </ContainerTitleType>
      <ContainerImageDesc>
      <Img src={img} alt={title} />
      <SynopsisContainer>
        <p>{desc}</p>
      </SynopsisContainer>
      </ContainerImageDesc>
    </ContainerInfoMain>
  );
};

export default AnimeInfo;
