import styled from "styled-components";

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding-top: 24px;
`;
export const LogoImg = styled.img`
  width: 182.96px;
  height: 28.56px;
`;
export const UserPhotoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const UserNameSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.1px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const HeadContentDiv = styled.div`

`;
export const HeaderUl = styled.ul`
list-style-type: none;
  position: relative;
float: right;
text-align: right;
`
export const HeaderLi = styled.li`
padding-top: 10px;
  color: black;
  font-size: 22px;
  margin-left: 18px;
  cursor: pointer;

`;
export const HeaderList = styled.div`
display: block;
`


export const LogoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
  margin-right: 16px;
  align-items: center;
`;

export const Logo = styled.img``;


export const Enter = styled.button`
  width: 77px;
  height: 36px;
  left: 1223px;
  top: 24px;
  background: #140d40;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  &:hover {
    background: #2d1f79;
  }
  &:active {
    background: #3b29a2;
  }
`;