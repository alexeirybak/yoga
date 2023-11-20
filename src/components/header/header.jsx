import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./headerStyle";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/use-auth";


export function Header() {
  const logo = useSelector(state => state.logo)
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const {isAuth, email} = useAuth();

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
            {logo.logo === "white" ? <S.LogoImg src="/img/logo.png" alt="logo" /> : <S.LogoImg src="/img/logoBlack.png" alt="logo" />}
            </Link>
          </S.LogoTitleDiv>
          <S.UserDiv>
          {isAuth ?<>
              <S.UserPhotoImg src="/img/Ellipse.png" alt="userphoto" />
              <S.UserNameSpan color={logo.logo} onClick={toggleVisibility}>
              {user} ↓
            </S.UserNameSpan>
            </>
             :
                        <Link to="/login">
                        <S.EnterButton  >Войти</S.EnterButton>
                      </Link>
            }
            </S.UserDiv>
            </S.HeadContentDiv>
            {!visible && (
                            <S.HeaderList>
            <S.HeaderUl>
            <S.HeaderLi color={logo.logo} onClick={ToMain}>На главную</S.HeaderLi>
            <S.HeaderLi color={logo.logo} onClick={ToProfile}>Профиль</S.HeaderLi>
            <S.HeaderLi color={logo.logo} onClick={Exit}>Выход</S.HeaderLi>
            </S.HeaderUl>
                        </S.HeaderList>
        )}
</>
          

      );
}