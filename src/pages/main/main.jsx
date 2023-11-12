import * as S from "./mainStyled";

import profCard1 from "../../img/profCard1.png";
import profCard2 from "../../img/profCard2.png";
import profCard3 from "../../img/profCard3.png";
import profCard4 from "../../img/profCard4.png";
import profCard5 from "../../img/profCard5.png";
import sticker from "../../img/sticker.png";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const courses = [
  { id: "1", img: profCard1 },
  { id: "2", img: profCard2 },
  { id: "3", img: profCard3 },
  { id: "4", img: profCard4 },
  { id: "5", img: profCard5 },
];

export const Main = () => {
  const [show, setShow] = useState(false);

      return (
    <S.Container>
      <S.Content>
        <S.LogoTitle>
          <S.Logo src={logo} alt="logo" />
            <Link to="/login">
              
              <S.Enter>Войти</S.Enter>
            </Link>
        </S.LogoTitle>
        <S.HeaderContent>
          <S.SubTitle>
            <S.TitleText name="top">
              Онлайн-тренировки для занятий дома
            </S.TitleText>
            <S.TitleTextSpan>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleTextSpan>
          </S.SubTitle>
          <S.Sticker src={sticker} alt="SaleSticker" />
        </S.HeaderContent>
        <S.Choice>
          {courses.map((i) => (
            <Link key={i.id} to={`courses/${i.id}`}>
              <S.ProfCard src={i.img} alt="prof_card" />
            </Link>
          ))}
        </S.Choice>
        <S.Button>
          <a href="#top">
            <S.Up>Наверх ↑</S.Up>
          </a>
        </S.Button>
      </S.Content>
      </S.Container>
      );
    }