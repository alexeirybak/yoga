import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  width: 100%;
  background: #fafafa;
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);
`;
export const Content = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleText = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 74px;
`;
export const ProfCard = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Параметры тени */
`;
export const SportChoice = styled.ul`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 44px;
`;
export const TitleTextLogin = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 40px;
  margin-right: 5px;
`;
export const TitleTextPass = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 20px;
  margin-right: 5px;
`;
export const ChangeLogPass = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-bottom: 75px;
`;
export const LogButton = styled.button`
  width: 275px;
  height: 52px;
  left: 140px;
  top: 360px;
  background: #580ea2;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  border-color: #580ea2;
`;
export const PassButton = styled.button`
  width: 275px;
  height: 52px;
  left: 140px;
  top: 360px;
  background: #580ea2;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  border-color: #580ea2;
`;
export const TitleCourse = styled.span`
  padding-top: 70px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;
export const Sport = styled.div`
  position: relative;
`;
export const SportButton = styled.button`
  width: 136px;
  height: 43px;
  left: 30px;
  top: 410px;
  background: #c7e957;
  border-radius: 80px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  position: absolute;
`;

export const UserLogin = styled.input`
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  outline: none;
  text-align: center;
  font-size: 15px;
`;
export const LoginButton = styled.button`
  background: #39316c;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  height: 30px;
  width: 100px;
  &:hover {
    background: #120b3c;
  }
  &:active {
    background: #3b29a2;
  }
`;
export const Text = styled.span`
  margin-left: 10px;
`;

export const textNoPay = styled.h2`
  margin-top: 50px;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  color: black;
`;

export const buttonNextPay = styled.button`
  margin-top: 50px;
  background: #39316c;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  height: 30px;
  width: 100px;
  &:hover {
    background: #120b3c;
  }
  &:active {
    background: #3b29a2;
  }
`;
export const Error = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.8px;
  color: red;
`;