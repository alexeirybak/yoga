
import * as S from "./profileStyle";
import { useEffect, useState } from "react";
import { Header } from "../../Components/header/header";
import { NewLogin } from "../../Components/newLogin/newLogin";
import { NewRegister } from "../../Components/newRegister/newRegister";
import { setLogo } from "../../store/slices/logoSlices";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const courses = [
  { id: "1", img: "/img/profCard1.png" },
  { id: "2", img: "/img/profCard2.png" },
];

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [valuePass, setValuePass] = useState(null);
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(setLogo({
    logo: "black",
  }))
}, []);
  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.SubTitle>
          <S.TitleText>Мой профиль</S.TitleText>
          <S.TitleTextLogin>
            Логин:<S.Text>user@test.com</S.Text>
          </S.TitleTextLogin>
          {edit ? <NewLogin setEdit={setEdit} /> : null}
          <S.TitleTextPass>
            Пароль:<S.Text>password</S.Text>
          </S.TitleTextPass>
          {editPass ? (
            <NewRegister
              setEditPass={setEditPass}
              value={valuePass}
              setValuePass={setValuePass}
            />
          ) : null}
        </S.SubTitle>
        <S.ChangeLogPass>
          <S.LogButton onClick={() => setEdit(true)}>
            Изменить логин
          </S.LogButton>
          <S.PassButton onClick={() => setEditPass(true)}>
            Изменить пароль
          </S.PassButton>
        </S.ChangeLogPass>
        <S.TitleCourse>Мои курсы</S.TitleCourse>

        <S.SportChoice>
          {courses.map((course) => (
            <S.Sport key={course.id}>
              <S.ProfCard src={course.img} alt="prof_card" />
              <Link to={`/training/${course.id}`}>
                <S.SportButton>Перейти →</S.SportButton>
              </Link>
            </S.Sport>            
          ))}
        </S.SportChoice>
      </S.Content>
    </S.Container>
  );
}

// (
//     <div>
//       <S.textNoPay>У вас ещё не куплено ни одного курса</S.textNoPay>
//       <Link to="/">
//         <S.buttonNextPay>Купить...</S.buttonNextPay>
//       </Link>
//     </div>
//   )
