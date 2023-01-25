import styled from "styled-components";

const MovieSide = ({ clickNow, clickPopular, popular, now }) => {
  return (
    <S.Wrapper>
      <S.List>
        <li onClick={clickPopular}>HOME</li>

        <li onClick={clickPopular}>POPULAR</li>
        <li onClick={clickNow}>NOW</li>
        <li>UPCOMING</li>
      </S.List>
    </S.Wrapper>
  );
};
export default MovieSide;

const Wrapper = styled.div`
  position: sticky;
  width: 15%;
  height: 100vh;
  margin-right: 40px;
  top: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.fontColor};
`;
const List = styled.div`
  & li {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    padding: 32px 0;
    cursor: pointer;
    list-style: none;
  }
`;
const S = {
  Wrapper,
  List,
};
