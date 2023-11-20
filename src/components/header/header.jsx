import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./headerStyle";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/use-auth";

export function Header() {
  const {isAuth, email} = useAuth();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const user = useSelector(state => state.user);
  const logo = useSelector(state => state.logo)
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
          {isAuth ?           
          <S.UserDiv>
            <Link to="/profile">
              <S.UserPhotoImg src="/img/Ellipse.png" alt="userphoto" />
            </Link>
            <S.UserNameSpan onClick={toggleVisibility}>
              {user} ↓
            </S.UserNameSpan>
            </S.UserDiv> : 
                    <S.LogoTitle>
                    <Link to="/">
                        {logo.logo === "white" ? <S.LogoImg src="/img/logo.png" alt="logo" /> : <S.LogoImg src="/img/logoBlack.png" alt="logo" />}
                    </Link>
                    <Link to="/login">
                    <S.Enter>Войти</S.Enter>
        </Link>
                      </S.LogoTitle>  
            }

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