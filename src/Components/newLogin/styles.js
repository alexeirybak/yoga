import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ModalBlock = styled.div`
  position: relative;
`;

export const Closer = styled.img`
  position: absolute;
  z-index: 999;
  top: 0px;
  right: 0px;
  padding: 10px;
  display: block;
  cursor: pointer;
`;

export const ModalFormLogin = styled.div`
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 33px 47px 41px;
  position: relative;
  width: 366px;
  height: 331px;
`;

export const ModalFormLoginImg = styled.img`
  cursor: pointer;
  width: 220px;
  height: 35px;
`;

export const ModalFormLoginInput = styled.div`
  width: 278px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ModalFormLoginButtons = styled(ModalFormLoginInput)``;

export const Text = styled.p`
  padding-top: 28px;
  padding-bottom: 15px;
  color: #000;
  font-family: StratosSkyeng, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
`;

export const ModalInput = styled.input`
  margin-bottom: 30px;
  padding-top: 2px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #d0cece;
  outline: none;
  &::placeholder {
    font-family: StratosSkyeng, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    color: #d0cece;
  }
`;
export const ModalButtonEnter = styled.button`
  height: 52px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.054px;
  font-variant-numeric: lining-nums proportional-nums;
  border-radius: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #580ea2;
  color: #fff;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: rgb(255, 128, 113);
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 80px;
  left: 5px;
  text-align: center;
  margin-top: 10px;
`;