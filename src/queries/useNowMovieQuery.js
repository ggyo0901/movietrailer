import { useInfiniteQuery } from "@tanstack/react-query";
import MovieAPi from "../apis/movieApi";
import queryKey from "../conts/queryKey";

const useNowMovieQuery = () => {
  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKey.NOW_MOVIE_LIST], //쿼리키
    ({ pageParam = 1 }) =>
      MovieAPi.getNowPlayingMovies({ params: { page: pageParam } }), //콜백함수
    {
      getNextPageParam: (lastPage) => {
        //다음 요청시 페이지 +1
        return lastPage.data.page + 1;
      },
    }
  );
  return { data, fetchNextPage, isFetching };
};

export default useNowMovieQuery;
