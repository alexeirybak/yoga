import * as S from "./styles";

export const NewLogin = ({ setEdit }) => {
  const handleClose = () => {
    setEdit(false);
  };
  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} />
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginImg src="/logo.png" alt="logo" />
          <S.Text>Новый логин:</S.Text>
          <S.ModalFormLoginInput>
            <S.ModalInput type="text" placeholder="Логин" />
          </S.ModalFormLoginInput>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter>Сохранить</S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};
