import styled, { css } from 'styled-components'

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
  top: calc(50% - (331px / 2));
  opacity: 1;
`

export const ModalFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 366px;
  height: 331px;
  background-color: #fff;
  border-radius: 12px;
  padding: 33px 47px 47px 41px;
`

export const ModalFormLoginLink = styled.a``

export const ModalFormLoginTopImg = styled.img`
  position: absolute;
  top: 2rem;
  left: 5rem;
  cursor: pointer;
`;

export const ModalFormLoginImg = styled.img`
  display: block;
  margin: auto;
`

export const ModalFormLoginInput = styled.div`
  width: 278px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ModalFormLoginButtons = styled(ModalFormLoginInput)``

export const Text = styled.p`
  padding: 38px 0 20px 41px;
  color: #000;
  font-family: StratosSkyeng, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
`

export const ModalInput = styled.input`
  margin-bottom: 50px;
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
`
