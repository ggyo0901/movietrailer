import styled from "styled-components";
import { flexAlignCenter } from "../../../styles/common";
const LayoutHeader = () => {
  return (
    <s.Wrapper>
      <s.Logo>JM</s.Logo>
      <s.Nav>
        <li>now</li>
        <li>upcoming</li>
        <li>top-rated</li>
      </s.Nav>
    </s.Wrapper>
  );
};

export default LayoutHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.palette.blackColor};
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.palette.mainColor};
  font-size: 76px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const Nav = styled.ul`
  color: ${({ theme }) => theme.palette.fontColor};
  display: flex;
  justify-content: space-around;
  width: 380px;
  font-size: 24px;
  margin-right: 32px;

  & li::after {
    color: #999;
    content: "|";
    margin: 0 1rem;
  }

  &li:last-child::after {
    content: "";
  }
`;

const s = {
  Wrapper,
  Logo,
  Nav,
};
