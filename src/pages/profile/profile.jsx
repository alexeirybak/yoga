
import * as S from "./profileStyle";
import { useState } from "react";
import { Header } from "../../Components/header/header";
import { NewLogin } from "../../Components/newLogin/newLogin";
import { NewRegister } from "../../Components/newRegister/newRegister";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [valuePass, setValuePass] = useState(null);
  
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
          <li>
            <S.Sport>
              <S.ProfCard src="/img/profCard1.png" alt="prof_card" />
              <S.SportButton>Перейти →</S.SportButton>
            </S.Sport>
          </li>
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
