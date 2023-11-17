import Header from 'components/header/header';
import * as S from "./styles";

export const Trainings = () => {

  return (
    <S.Wrapper>
      <Header/>
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
