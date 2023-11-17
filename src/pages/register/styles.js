import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`

export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #271A58;
`

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`

export const ModalFormLogin = styled.div`
  width: 366px;
  height: 439px;
  background-color: #fff;
  border-radius: 12px;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 43px 47px 47px 41px;
  align-items: center;
`



export const ModalFormLoginTopImg = styled.img`
  position: absolute;
  top: 2rem;
  left: 5rem;
  cursor: pointer;
`;

export const ModalFormLoginImg = styled.img``

export const ModalFormLoginInput = styled.div`
  width: 278px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ModalFormLoginButtons = styled(ModalFormLoginInput)``

export const ModalInput = styled.input`
  height: 52px;
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
`

export const ModalInputConfirmPassword = styled(ModalInput)``

export const ModalBtnSignup = styled.button`
  height: 52px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.054px;
  font-variant-numeric: lining-nums proportional-nums;
  border-radius: 46px;
  cursor: pointer;
  width: 278px;
  border: 1px solid #d0cece;
  color: #000;
  background-color: #fff;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`
