import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
/*///////////////////////////////////////*/
const ContainerTarget = styled.div`
  position: relative;
  width: var(--w-img);
  height: var(--h-img);
  
  transition: ease-in-out .10s;
  margin: 0 0 3rem 0;
  &:hover{
    transform: scale(0.9);
  }
`;
const TargetImg = styled.img`
  min-width: var(--w-img);
  min-height: var(--h-img);
  border-radius: var(--radius-target);
`;
const TitleTarget = styled.h2`
  color: #ffff;
`;
const Score = styled.span`
  color: #ffff;
  margin: 0 5px 0 0;
`;
const DataTarget = styled.div`
  position: absolute;
  bottom: 5px;
  padding: 100px 0 10px 10px;
  width: 100%;
  left: 0;
  background: linear-gradient(0deg, var(--color-header), transparent);
  border-radius: 0 0 var(--radius-target) var(--radius-target);
`;
const ResultMain = ({ src_img, title, score }) => {
  return (
    <>
      <ContainerTarget>
        <TargetImg src={src_img} />
        <DataTarget>
          <TitleTarget>{title}</TitleTarget>
          <Score>{score}</Score>
          <box-icon type='solid' name='star' color="var(--color-primary)"></box-icon>
        </DataTarget>
      </ContainerTarget>
    </>
  );
};

ResultMain.propTypes = {
  src_img: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
};

export default ResultMain;
