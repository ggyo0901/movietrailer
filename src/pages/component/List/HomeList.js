import { useState } from "react";
import styled from "styled-components";
import NowMovieContent from "./content/nowcontent";
import PopularMovieContent from "./content/popularcontent";

import MovieSide from "./side/side";
import MovieTitle from "./title/title";

const HomeList = () => {
  const [popular, setPopular] = useState(false);
  const [now, setNow] = useState(false);

  const clickPopular = () => {
    setPopular(true);

    setNow(false);
  };
  const clickNow = () => {
    setNow(true);
    setPopular(false);
  };
  return (
    <>
      <MovieTitle />
      <S.Container>
        <MovieSide
          clickNow={clickNow}
          clickPopular={clickPopular}
          popular={popular}
          now={now}
        />
        {popular ? (
          <PopularMovieContent />
        ) : now ? (
          <NowMovieContent />
        ) : (
          <PopularMovieContent />
        )}
      </S.Container>
    </>
  );
};
export default HomeList;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S = {
  Container,
};
