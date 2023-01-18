import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReplaceIMAGE from "../../assets/mainB.jpg";
import { flexCenter } from "../../styles/common";

const MovieCard = ({ movie }) => {
  const [movieOverView, setMovieOverView] = useState("");
  const IMAGE_URL = useRef(process.env.REACT_APP_IMAGE_URL);
  useEffect(() => {
    if (!movie) return;
    if (movie.overview.length > 100) {
      setMovieOverView(movie.overview.slice(0, 100) + "...");
    } else {
      setMovieOverView(movieOverView);
    }
  }, [movie, movieOverView]);
  return (
    <S.Wrapper>
      <div>
        <S.Poster>
          <img
            src={
              movie.poster_path
                ? IMAGE_URL.current + movie.poster_path
                : ReplaceIMAGE
            }
            alt="car"
          />
        </S.Poster>
        <S.DescBox>
          <h1>{movie.title}</h1>
          <div>{movie.vote_average}</div>
          <p>{movieOverView}</p>
        </S.DescBox>
      </div>
    </S.Wrapper>
  );
};
export default MovieCard;

const Wrapper = styled.div`
  width: 340px;
  height: 610px;
  /* aspect-ratio: 1/2; */
  margin: 8px;

  overflow: hidden;
`;

const Poster = styled.div`
  ${flexCenter}
  & img {
    width: 260px;
    height: 9/16;
  }
`;

const DescBox = styled.div`
  width: 260px;
  margin: 0 auto;
  color: white;
  line-height: 30px;
`;

const S = {
  Wrapper,
  Poster,
  DescBox,
};
