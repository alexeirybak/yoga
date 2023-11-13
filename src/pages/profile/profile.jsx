import * as S from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserHeader } from "../../components/userHeader/userHeader";
import PopupSelectWorkout from "../../components/popupSelectWorkout/popupSelectWorkout";
import {
  useEmailChangeMutation,
  usePassChangeMutation,
} from "../../services/changeAccountDataApi";
import { useQueryUsersCourseDatabase } from "../../services/queryFirebaseUsersApi";

export default function ProfilePage() {
  const [changeEmail, { error, isLoading}] =
    useEmailChangeMutation();
  const [changePass] = usePassChangeMutation();
  let userToken = useSelector((state) => state.user.token);
  let login = localStorage.getItem("login");
  let pass = localStorage.getItem("pass");
  const [SelectWorkout, setSelectWorkout] = useState(false);

  const [edit, setEdit] = useState(false);
  const [valueMail, setValueMail] = useState(login);
  const [editPass, setEditPass] = useState(false);
  const [valuePass, setValuePass] = useState(pass);

  const emailPath = login.replace(/\./g, "-");
  useQueryUsersCourseDatabase(emailPath);
  const courses = useSelector((state) => state.userData.user_courses);

  const toggleTraining = (course) => {
    localStorage.setItem("selectedCourse", course);

    if (SelectWorkout) {
      setSelectWorkout(false);
    } else {
      setSelectWorkout(true);
    }
  };

  const onChangeEmail = () => {
    changeEmail({ email: valueMail, token: userToken });
    setEdit(false);
  };
  const onChangePassword = () => {
    changePass({ password: valuePass, token: userToken });
    setEditPass(false);
  };
  
  return (
    <S.Container>
      {SelectWorkout === true ? (
        <PopupSelectWorkout
          active={SelectWorkout}
          setActive={setSelectWorkout}
          refURL={`courses/${localStorage.getItem("selectedCourse")}`}
        />
      ) : null}
      <S.Content>
        <UserHeader />
        <S.SubTitle>
          <S.TitleText>Мой профиль</S.TitleText>
          <S.TitleTextLogin>
            Логин:<S.Text>{valueMail}</S.Text>{" "}
          </S.TitleTextLogin>
          {error ? (
            <S.Error>{error.data.error.message}</S.Error>
          ) : (
            isLoading
          )}
          {edit ? (
            <div>
              <S.UserLogin
                onChange={(e) => {
                  setValueMail(e.target.value);
                }}
                value={valueMail}
              />
              <S.LoginButton onClick={onChangeEmail}>Сохранить</S.LoginButton>
              <S.LoginButton onClick={() => setEdit(false)}>
                Отмена
              </S.LoginButton>
            </div>
          ) : null}
          <S.TitleTextPass>
            Пароль:<S.Text>{valuePass}</S.Text>{" "}
          </S.TitleTextPass>
          {editPass ? (
            <div>
              <S.UserLogin
                onChange={(e) => {
                  setValuePass(e.target.value);
                }}
                value={valuePass}
              />
              <S.LoginButton onClick={onChangePassword}>
                Сохранить
              </S.LoginButton>
              <S.LoginButton onClick={() => setEditPass(false)}>
                Отмена
              </S.LoginButton>
            </div>
          ) : null}
        </S.SubTitle>
        <S.ChangeLogPass>
          <S.LogButton onClick={() => setEdit(true)}>
            Редактировать логин
          </S.LogButton>

          <S.PassButton onClick={() => setEditPass(true)}>
            Редактировать пароль
          </S.PassButton>
        </S.ChangeLogPass>
        <S.TitleCourse>Мои курсы</S.TitleCourse>
        {courses ? (
          <S.SportChoice>
            {Object.entries(courses).map((item) => (
              <li key={item[0]}>
                <S.Sport>
                  <S.ProfCard
                    src={require(`../../img/${item[1].img}`)}
                    alt="prof_card"
                  />
                  <S.SportButton onClick={() => toggleTraining(item[0])}>
                    Перейти →
                  </S.SportButton>
                </S.Sport>
              </li>
            ))}
          </S.SportChoice>
        ) : (
          <div>
            <S.textNoPay>У вас ещё не куплено ни одного курса</S.textNoPay>
            <Link to="/">
              <S.buttonNextPay>Купить...</S.buttonNextPay>
            </Link>
          </div>
        )}
      </S.Content>
    </S.Container>
  );
}