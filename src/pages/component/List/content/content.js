import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../../../component/card/card";
import usePopularMovieQuery from "../../../../queries/usePopularMovieQuery";
import { useInView } from "react-intersection-observer";
const MovieContent = () => {
  const { data: movieList, fetchNextPage, isFetching } = usePopularMovieQuery();
  const [ref, inView] = useInView();
  // ref= useRef  //div 요소 선택
  // inview // 감지 됨에 따라 변화되느 옵션 값

  console.log(movieList);

  useEffect(() => {
    if (!inView || isFetching) return;
    fetchNextPage();
  }, [inView, fetchNextPage, isFetching]);

  //react-query 안썻을떄

  /**
   * const [page,setPage]=useState(1)
   * useEffect=(()=>{
   * if(!inview) return
   * setPage((prev)=>prev+1)
   *
   * },[inview])
   * useEffect(()=>{
   * MovieAPi.getPopularMovieList({params:{page}),[[page]]}
   * })
   *
   */
  return (
    <S.Wrapper>
      <S.Container>
        {movieList &&
          movieList.pages.map((page, index) => (
            <>
              <React.Fragment key={index}>
                {page.data.results.map((movie) => (
                  <MovieCard movie={movie} key={index} />
                ))}
              </React.Fragment>
            </>
          ))}
        <div ref={ref} />
      </S.Container>
    </S.Wrapper>
  );
};
export default MovieContent;

const Wrapper = styled.div`
  min-height: 100vh;
  width: calc(100%-340px);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 64px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const S = {
  Wrapper,
  Container,
};
