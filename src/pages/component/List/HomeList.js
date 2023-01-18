import styled from "styled-components";

import MovieContent from "./content/content";
import MovieSide from "./side/side";
import MovieTitle from "./title/title";

const HomeList = () => {
  return (
    <>
      <MovieTitle />
      <S.Container>
        <MovieSide />
        <MovieContent />
      </S.Container>
    </>
  );
};
export default HomeList;

const Container = styled.div`
  display: flex;
`;

const S = {
  Container,
};
