import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./headerStyle";


export function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  let user = 'UserName';

  const toggleVisibility = () => setVisible(!visible);
  const ToMain = () => {
    navigate("/");
  }
  const Exit = () => {
    navigate("/login");
  };
  const ToProfile = () => {
    navigate("/profile");
  }

  return (
    <>
        <S.HeadContentDiv>
          <S.LogoTitleDiv>
            <Link to="/">
              <S.LogoImg src="/img/logoBlack.png" alt="logo" />
            </Link>
          </S.LogoTitleDiv>
          <S.UserDiv>
            <Link to="/profile">
              <S.UserPhotoImg src="/img/Ellipse.png" alt="userphoto" />
            </Link>
            <S.UserNameSpan onClick={toggleVisibility}>
              {user} ↓
            </S.UserNameSpan>
            </S.UserDiv>
            </S.HeadContentDiv>
            {!visible && (
                            <S.HeaderList>
            <S.HeaderUl>
            <S.HeaderLi onClick={ToMain}>На главную</S.HeaderLi>
            <S.HeaderLi onClick={ToProfile}>Профиль</S.HeaderLi>
            <S.HeaderLi onClick={Exit}>Выход</S.HeaderLi>
            </S.HeaderUl>
                        </S.HeaderList>
        )}
</>
          

      );
}