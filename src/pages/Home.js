import styled from "styled-components";
import HomeBanner from "./component/Banner/HomeBanner";
import HomeList from "./component/List/HomeList";

const HomePage = () => {
  return (
    <S.Wrapper>
      <HomeBanner />
      <HomeList />
    </S.Wrapper>
  );
};
export default HomePage;

const Wrapper = styled.div``;

const S = {
  Wrapper,
};
