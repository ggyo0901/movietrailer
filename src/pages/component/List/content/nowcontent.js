import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../../../component/card/card";

import { useInView } from "react-intersection-observer";
import useNowMovieQuery from "../../../../queries/useNowMovieQuery";

const NowMovieContent = () => {
  const { data: nowmovieList, fetchNextPage, isFetching } = useNowMovieQuery();
  const [ref, inView] = useInView();
  // ref= useRef  //div 요소 선택
  // inview // 감지 됨에 따라 변화되느 옵션 값

  console.log(nowmovieList);

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
        {nowmovieList &&
          nowmovieList.pages.map((page, index) => (
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
export default NowMovieContent;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

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
