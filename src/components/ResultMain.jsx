import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "../style/tippyChange.css";
/*///////////////////////////////////////*/
const ContainerTarget = styled.div`
  position: relative;
  width: var(--w-img);
  height: var(--h-img);

  transition: ease-in-out 0.1s;
  margin: 0 0 3rem 0;
  /* &:hover {
    transform: scale(0.95);
  } */
`;
const InfoAnimeDown = styled.div``;
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
  padding: 100px 20px 20px 20px;
  width: 100%;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: space-between;
  background: linear-gradient(0deg, var(--color-header), transparent);
  border-radius: 0 0 var(--radius-target) var(--radius-target);
`;
const HeartContainer = styled.div`
  cursor: pointer;
`;
const ResultMain = ({ src_img, title, score, synopsis }) => {
  const [love, setLove] = useState(true);
  const addLoveA = () => {
    setLove(!love);
  };
  return (
    <>
      <Tippy
        className="tippy-box"
        content={<span>{synopsis}</span>}
        placement="bottom"
        interactive={true}
        followCursor={true}
        theme="newTheme"
      >
        <ContainerTarget>
          <TargetImg
            width="100%"
            height="auto"
            id="myTarget"
            src={src_img}
            alt={title}
          />
          <DataTarget>
            <InfoAnimeDown>
              <TitleTarget>{title}</TitleTarget>
              <Score>{score}</Score>
              <box-icon
                type="solid"
                name="star"
                color="var(--color-primary)"
              ></box-icon>
            </InfoAnimeDown>
            <HeartContainer onClick={addLoveA}>
              {love ? (
                <box-icon
                  name="heart"
                  size="lg"
                  color="var(--color-primary)"
                  type="regular"
                ></box-icon>
              ) : (
                <box-icon
                  name="heart"
                  size="lg"
                  type="solid"
                  color="var(--color-primary)"
                ></box-icon>
              )}
            </HeartContainer>
          </DataTarget>
        </ContainerTarget>
      </Tippy>
    </>
  );
};

ResultMain.propTypes = {
  src_img: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
  synopsis: PropTypes.string,
};

export default ResultMain;
