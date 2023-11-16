import { useState } from "react";
import * as S from "./styles";

export function NewRegister({ setEditPass, setValuePass, valuePass }) {
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setEditPass(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (valuePass !== repeatPass) {
      setError("Пароли не совпадают. Попробуйте еще раз");
    } else {
      setError("");
      setValuePass(repeatPass);
    }
  };

  const handleChange = (event) => {
    if (event.target.value.length < 8) {
      setError("Пароль должен быть не менее 8 знаков");
    } else {
      setError("");
    }
    setValuePass(event.target.value);
  };

  const handleRepeatChange = (event) => {
    if (event.target.value.length < 8) {
      setError("Пароль должен быть не менее 8 знаков");
    } else {
      setError("");
    }
    setRepeatPass(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} />
        <S.ModalFormLogin action="#" onSubmit={handleSave}>
          <S.ModalFormLoginImg src="/logo.png" alt="logo" />
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.Text>Новый пароль:</S.Text>
          <S.ModalFormLoginInput>
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={valuePass}
              onChange={handleChange}
            />
          </S.ModalFormLoginInput>
          <S.ModalFormLoginInput>
            <S.ModalInput
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              value={repeatPass}
              onChange={handleRepeatChange}
            />
          </S.ModalFormLoginInput>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter onClick={handleSave}>
              Сохранить
            </S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
}
