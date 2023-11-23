import { useState, useEffect } from "react";
import { changeLogin } from "../../firebase/changeEmail";
import * as S from "./styles";

export const NewLogin = ({ setEdit }) => {
  const [login, setLogin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setEdit(false);
  };

  const handleSaveNewLogin = async (event) => {
    event.preventDefault();
    if (!login) {
      setError("Введите email");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      changeLogin(login);
    } catch (error) {
      const errorMessage =
        error.code === "auth/operation-not-allowed"
          ? "Ваш логин еще не верифицирован"
          : "Произошла ошибка при смене логина";
      setError(errorMessage);
      if (
        error.message.includes(
          "Please verify the new email before changing email."
        )
      ) {
        setError("Пожалуйста, верифицируйте новый логин перед его изменением.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const newLogin = (event) => {
    const loginValidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!loginValidation.test(event.target.value)) {
      setError("Проверяйте вводимые символы");
    } else {
      setError(null);
    }
    setLogin(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} />
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginImg src="/img/logoBlack.png" alt="logo" />
          <S.Text>Новый логин:</S.Text>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.ModalFormLoginInput>
            <S.ModalInput
              type="text"
              placeholder="Логин"
              onChange={newLogin}
              value={login}
            />
          </S.ModalFormLoginInput>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter
              disabled={isLoading}
              onClick={handleSaveNewLogin}
            >
              {isLoading ? "Меняю..." : "Сохранить"}
            </S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};
