import styled from "styled-components";

export const LogoTitle = styled.div`

  margin-right: 16px;
`;
export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
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
  color: ${props => props.color};
`;

export const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;

`;
export const HeaderUl = styled.ul`
list-style-type: none;
  position: relative;
float: right;
text-align: right;
`
export const HeaderLi = styled.li`
padding-top: 10px;
  color: ${props => props.color};
  font-size: 22px;
  margin-left: 18px;
  cursor: pointer;

`;
export const HeaderList = styled.div`
display: block;
`


export const Enter = styled.button`
