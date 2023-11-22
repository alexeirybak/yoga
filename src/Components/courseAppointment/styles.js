import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 530px;
`;

export const Closer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0px;
  right: 0px;
  padding: 10px;
`;

export const CloserPoint = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloserIcon = styled.img``;

export const MainContent = styled.div`
  border-radius: 12px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
  position: relative;
`;

export const Booked = styled.span`
  font-size: 2rem;
  position: absolute;
  padding: 25px 88px 223px;
  color: #000;
`;

export const BlockImg = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hand = styled.img`
  width: 334px;
  height: 360px;
  margin-top: 25px;
`;
