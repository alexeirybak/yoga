import { useParams } from "react-router-dom";
import { Header } from "../../Components/header/header";
import * as S from "./styles";
import { useEffect, useState } from "react";
import ProgressInput from "../../Components/ProgressInput/ProgressInput";
import { setLogo } from "../../store/slices/logoSlices";
import { useDispatch, useSelector } from "react-redux";

export const Trainings = () => {
  const getProgressInPercent = ({ needed, done }) => {
    return (done / needed) * 100;
  };

  const yogaExercises = useSelector((state) => state.workout);

  // костыль для цвета прогрессбара
  const colors = [
    {
      main: "#565EEF",
      light: "#EDECFF",
    },
    {
      main: "#FF6D00",
      light: "#FFF2E0",
    },
    {
      main: "#9A48F1",
      light: "#F9EBFF",
    },
    {
      main: "#565EEF",
      light: "#EDECFF",
    },
    {
      main: "#FF6D00",
      light: "#FFF2E0",
    },
  ];

  const { params } = useParams();

  const trainingChosen = yogaExercises.trainingData[params];
  console.log(params);

  // тут будущий запрос в БД на данные про тренировке
  // const { data, isLoading, error } = useGetSelectedTrainingQuery({ id: params.id });

  const [inputOnShow, setInputOnShow] = useState(false);

  const closeInput = () => {
    setInputOnShow(false);
  };

  const progressForm = (
    <ProgressInput
      closeInput={closeInput}
      yogaExercises={yogaExercises}
      // setYogaWorkouts={setYogaWorkouts}
    ></ProgressInput>
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLogo({
        logo: "black",
      })
    );
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />

        <S.ContentBlock>
          <S.ContentVideoBlock>
            <S.VideoHeader>Йога</S.VideoHeader>
            <S.VideoName>
              {trainingChosen.name} / {trainingChosen.type}
            </S.VideoName>

            <S.VideoExercise
              src={trainingChosen.video_file}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </S.ContentVideoBlock>
          <S.ExerciseBlock>
            <S.ExerciseDescription>
              <S.ExerciseDescriptionHeader>
                Упражнения
              </S.ExerciseDescriptionHeader>
              <S.ExercisesList>
                {trainingChosen.exercise.map((exe, index) => (
                  <S.ExerciseListItem key={index}>
                    {exe.name} ({exe.repeats} повторений)
                  </S.ExerciseListItem>
                ))}
              </S.ExercisesList>
              <S.FillInProgress onClick={() => setInputOnShow(true)}>
                Заполнить свой прогресс
              </S.FillInProgress>
            </S.ExerciseDescription>
            <S.Progress>
              <S.ProgressHeader>Мой прогресс по тренировке</S.ProgressHeader>
              <S.ProgressDetails>
                {trainingChosen.exercise.map((exe, index) => (
                  <S.ProgressItem key={index}>
                    <S.ExerciseProgress>{exe.name}</S.ExerciseProgress>
                    <S.FirstExerciseBar
                      $progColorLight={colors[index].light}
                      $progColorMain={colors[index].main}
                    >
                      <S.FirstFilledIn
                        $progColorMain={colors[index].main}
                        $width={getProgressInPercent({
                          needed: exe.repeats,
                          done: exe.repeats_done,
                        })}
                      >
                        <S.ProgressResult>
                          {getProgressInPercent({
                            needed: exe.repeats,
                            done: exe.repeats_done,
                          })}
                          %
                        </S.ProgressResult>
                      </S.FirstFilledIn>
                    </S.FirstExerciseBar>
                  </S.ProgressItem>
                ))}
              </S.ProgressDetails>
            </S.Progress>
          </S.ExerciseBlock>
        </S.ContentBlock>
        {inputOnShow ? progressForm : null}
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};
