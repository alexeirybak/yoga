import { useParams } from 'react-router-dom';
import * as S from './ProgressInput.styled';
import { useState } from 'react';
import ValidatedProgress from '../ValidatedProgress/ValidatedProgress';
import { updateProgressExercise } from '../../firebase/updateUserProgress';
import { useSelector } from 'react-redux';
import { useDataWorkout } from '../../firebase/fireWorkouts';

export default function ProgressInput ({ closeInput, trainingChosen }) {

        // выбранный урок из списка
        // const params = useParams();
        // const index = Number(params.id);

        // const yogaWorkouts = useSelector(state => state.workout);

        const [confirmOnShow, setConfirmOnShow] = useState(false);
        const submitProgress = () => {
            setConfirmOnShow(true);
        }

        console.log(trainingChosen);

        //нихрена пока не работает
        const inputHandler = ({ id }) => (event) => {
            updateProgressExercise({ IDtraining: trainingChosen.id, IDexercise: id, newValue: event.target.value });
        };



        const progressList = trainingChosen.exercise.map(exercise => 
            <S.ProgressItem key={exercise.id}>
                <label htmlFor={exercise.id}>Сколько раз вы сделали {exercise.name} </label>
                <S.ProgressItemInput placeholder='Введите значение' id={exercise.id} type='number'
                 onChange={inputHandler({ id: exercise.id })}  
                 />
            </S.ProgressItem>
            )

    return (
        <S.ProgressContainer>
            {confirmOnShow ? 
            <ValidatedProgress closeInput={closeInput}/> :
            <S.ProgressWrapper>
                <S.ProgressCloseButton onClick={closeInput}>
                    <use xlinkHref='/icons/sprite.svg#icon-close' />
                </S.ProgressCloseButton>
                <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
                <S.ProgressList>
                    {progressList}
                    <S.ProgressInputButton onClick={() => submitProgress()} type='submit'>Отправить</S.ProgressInputButton>
                </S.ProgressList>
            </S.ProgressWrapper> }
        </S.ProgressContainer>
    )
}