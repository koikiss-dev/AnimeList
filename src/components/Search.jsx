import styled from "styled-components";
import PropTypes from "prop-types";
/*///////////////////////////////////////*/
const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-primary);
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 100px;
  width: 44px;
  transition: 0.2s;
  &:hover {
    width: 30%;
    background: transparent;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 100px;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: r 100%;
  ${ContainerInput}:hover & {
    z-index: 1;
    width: 100%;
  }
  &::placeholder {
    opacity: 0.5;
  }
`;
const Search = ({ funcSearch }) => {
  return (
    <>
      <ContainerInput>
        <box-icon name="search" color="#ffff"></box-icon>
        <Input
          onKeyUp={(e) => (e.key === "Enter" ? funcSearch(e) : null)}
          type="text"
          placeholder="Name the anime"
        />
      </ContainerInput>
    </>
  );
};

Search.propTypes = {
  funcSearch: PropTypes.func,
};

export default Search;
