import styled from "styled-components";

export const Block404 = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 40px;
`;

export const Img = styled.img`
border-radius: 50%;
`;

export const Yoga = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #000;
`;

export const GoToMain = styled.p`
  background-color: #ad61ff;
  color: #fff;
  padding: 12px 15px;
  border-radius: 6px;
  box-sizing: border-box;
  &:hover {
    background-color: #9444eb;
  }
  &:active {
    background-color: #521c8d;
  }
`;

export const BlockPlayLists = styled.div`
  margin-top: -50px;
`;
