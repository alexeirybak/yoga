import * as S from './styles';

export function NewRegister() {

  return (
    <S.Wrapper>
      <S.ContainerEnter>
      <S.ModalFormLoginTopImg src="/logo-top.png" alt="logo" />
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalFormLoginLink href="../">
              <S.ModalFormLoginImg src="/logo.png" alt="logo" />
            </S.ModalFormLoginLink>
            <S.Text>Новый пароль:</S.Text>
            <S.ModalFormLoginInput>
              <S.ModalInput type="password" name="password" placeholder="Пароль" />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginInput>
              <S.ModalInput type="password" name="password" placeholder="Повторите пароль" />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalButtonEnter>Сохранить</S.ModalButtonEnter>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}