import { useState } from "react";
import * as S from "./styles";

export const Trainings = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuAppear = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <S.Wrapper>
      <S.LogoBlock>
        <S.Logo src="/logo.png" alt="logo" />
      </S.LogoBlock>
      <S.PersonBlock>
        <S.PersonPlace>
          <S.PersonDetails onClick={menuAppear}>
            <S.PersonIcon />
            <S.PersonName>rybak2108@yandex.ru</S.PersonName>
            <S.PersonMenuBlock>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </S.PersonMenuBlock>
            <S.MenuList
              $menuVisible={menuVisible}
              onMouseLeave={() => setMenuVisible(false)}
            >
              <S.MenuItem>На главную</S.MenuItem>
              <S.MenuItem>Профиль</S.MenuItem>
              <S.MenuItem>Выйти</S.MenuItem>
            </S.MenuList>
          </S.PersonDetails>
        </S.PersonPlace>
      </S.PersonBlock>
      <S.ContentBlock>
        <S.ContentVideoBlock>
          <S.VideoHeader>Йога</S.VideoHeader>
          <S.VideoName>
            Красота и здоровье / Йога на каждый день / 2 день
          </S.VideoName>
          <S.VideoExercise src="/exercise.jpg" alt="exercise" />
        </S.ContentVideoBlock>
        <S.ExerciseBlock>
          <S.ExerciseDescription>
            <S.ExerciseDescriptionHeader>Упражнения</S.ExerciseDescriptionHeader>
            <S.ExercisesList>
              <S.ExerciseListItem>Наклоны вперед (10 повторений)</S.ExerciseListItem>
              <S.ExerciseListItem>Наклоны назад (10 повторений)</S.ExerciseListItem>
              <S.ExerciseListItem>Поднятие ног, согнутых в коленях (5 повторений)</S.ExerciseListItem>
            </S.ExercisesList>
            <S.FillInProgress>Заполнить свой прогресс</S.FillInProgress>
          </S.ExerciseDescription>
          <S.Progress>
            <S.ProgressHeader>Мой прогресс по тренировке 2</S.ProgressHeader>
            <S.ProgressDetails>
              <S.ProgressItem>
                <S.ExerciseProgress>Наклоны вперед</S.ExerciseProgress>
                <S.FirstExerciseBar>
                  <S.FirstFilledIn>
                    <S.ProgressResult>100%</S.ProgressResult>
                  </S.FirstFilledIn>
                </S.FirstExerciseBar>
              </S.ProgressItem>
              <S.ProgressItem>
                <S.ExerciseProgress>Наклоны назад</S.ExerciseProgress>
                <S.SecondExerciseBar>
                  <S.SecondFilledIn>
                    <S.ProgressResult>60%</S.ProgressResult>
                  </S.SecondFilledIn>
                </S.SecondExerciseBar>
              </S.ProgressItem>
              <S.ProgressItem>
                <S.ExerciseProgress>
                  Поднятие ног, согнутых в коленях
                </S.ExerciseProgress>
                <S.ThirdExerciseBar>
                  <S.ThirdFilledIn>
                    <S.ProgressResult>20%</S.ProgressResult>
                  </S.ThirdFilledIn>
                </S.ThirdExerciseBar>
              </S.ProgressItem>
            </S.ProgressDetails>
          </S.Progress>
        </S.ExerciseBlock>
      </S.ContentBlock>
    </S.Wrapper>
  );
};
