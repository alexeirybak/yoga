import * as S from './styles'

export const Login = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalFormLoginLink href="../">
              <S.ModalFormLoginImg src="/logo.png" alt="logo" />
            </S.ModalFormLoginLink>
            <S.ModalFormLoginInput>
              <S.ModalInput type="text" name="login" placeholder="Почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalButtonEnter>
                Войти
              </S.ModalButtonEnter>
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
