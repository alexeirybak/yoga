import * as S from "./styles";

export function Register() {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalFormLoginTopImg src="/logo-top.png" alt="logo" />
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalFormLoginImg src="/logo.png" alt="logo" />
            <S.ModalFormLoginInput>
              <S.ModalInput type="text" name="login" placeholder="Почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalInputConfirmPassword
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
