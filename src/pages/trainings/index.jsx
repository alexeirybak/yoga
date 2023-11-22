import { useParams } from 'react-router-dom';
import {Header} from '../../Components/header/header';
import * as S from "./styles";

export const Trainings = () => {

  //мокап тренировок
  const yogaWorkouts = [{
    id: 0,
    name: 'Утренняя практика',
    type: 'Йога на каждый день / 1 день',
    exercise: ['Приветствие солнца (10 повторений)'],
    video_file: 'https://youtu.be/oqe98Dxivns',
    isFinished: true
}, 
{
    id: 1,
    name: 'Красота и здоровье',
    type: 'Йога на каждый день / 2 день',
    exercise: ['Наклон вперед (10 повторений)', 'Наклон назад (10 повторений)', 'Поднятие ног, согнутых в коленях (5 повторений)'],
    video_file: 'https://www.youtube.com/embed/v-xTLFDhoD0?si=sOUcrSXeRMOTjIC1',
    isFinished: true
},
{
    id: 2,
    name: 'Асаны стоя',
    type: 'Йога на каждый день / 3 день',
    exercise: ['Наклон к правой ноге (10 повторений)', 'Наклон к левой ноге (10 повторений)', 'Наклон к согнутой правой ноге (10 повторений)', 'Наклон к согнутой левой ноге (10 повторений)', 'Асана стоя (5 повторений)'],
    video_file: 'https://youtu.be/WxFz-4YsiEE',
    isFinished: false
},
{
    id: 3,
    name: 'Растягиваем мышцы бедра',
    type: 'Йога на каждый день / 4 день',
    exercise: ['Сесть на пятки с носками от себя (5 повторений)', 'Сесть на пятки с носками на себя (5 повторений)', 'Отпустить колено на пол из позы лотоса (10 повторений)', 'Отпустить колено на пол из позы лотоса с соединенными стопами (10 повторений)'],
    video_file: 'https://youtu.be/09uGkAEQuZI',
    isFinished: true
},
{
    id: 4,
    name: 'Гибкость спины',
    type: 'Йога на каждый день / 5 день',
    exercise: ['Округляем грудную клетку при выдохе (10 повторений)', 'Тянем левую руку в правую сторону (20 повторений)', 'Тянем правую руку в левую сторону (20 повторений)'],
    video_file: 'https://youtu.be/MIvcMapie_A',
    isFinished: false
  }]

  const params = useParams();
  console.log(params); // { id: "1" }

  const trainingChosen = yogaWorkouts.find(training => training.id === Number(params.id));

  // тут будущий запрос в БД на данные про тренировке
  // const { data, isLoading, error } = useGetSelectedTrainingQuery({ id: params.id });

  return (
    <S.Wrapper>
      <Header/>
      <S.ContentBlock>
        <S.ContentVideoBlock>
          <S.VideoHeader>Йога</S.VideoHeader>
          <S.VideoName>
            {trainingChosen.name} / {trainingChosen.type}
          </S.VideoName>

          <S.VideoExercise src={trainingChosen.video_file} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </S.ContentVideoBlock>
        <S.ExerciseBlock>
          <S.ExerciseDescription>
            <S.ExerciseDescriptionHeader>Упражнения</S.ExerciseDescriptionHeader>
            <S.ExercisesList>
              {trainingChosen.exercise.map((exe, index) => (
                <S.ExerciseListItem key={index}>{exe}</S.ExerciseListItem>
              ))}
            </S.ExercisesList>
            <S.FillInProgress>Заполнить свой прогресс</S.FillInProgress>
          </S.ExerciseDescription>
          <S.Progress>
            <S.ProgressHeader>Мой прогресс по тренировке</S.ProgressHeader>
            <S.ProgressDetails>
              {trainingChosen.exercise.map((exe, index) => (
                <S.ProgressItem key={index}>
                  <S.ExerciseProgress>{exe}</S.ExerciseProgress>
                  <S.FirstExerciseBar>
                    <S.FirstFilledIn>
                      <S.ProgressResult>100%</S.ProgressResult>
                    </S.FirstFilledIn>
                  </S.FirstExerciseBar>
              </S.ProgressItem>
              ))}
            </S.ProgressDetails>
          </S.Progress>
        </S.ExerciseBlock>
      </S.ContentBlock>
    </S.Wrapper>
  );
};
