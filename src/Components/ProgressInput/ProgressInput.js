import { useParams } from 'react-router-dom';
import * as S from './ProgressInput.styled';
import { useState } from 'react';
import ValidatedProgress from '../ValidatedProgress/ValidatedProgress';

export default function ProgressInput ({ closeInput, yogaWorkouts, setYogaWorkouts }) {

        //выбранный урок из списка
        const params = useParams();
        const index = Number(params.id);

        const [confirmOnShow, setConfirmOnShow] = useState(false);
        const submitProgress = () => {
            setConfirmOnShow(true);
        }

        // const inputHandler = ({ id, value }) => {
            
        //     const updYogaWorkouts = [...yogaWorkouts];
        //     const workout = updYogaWorkouts[index].exercise.find(item => item.id === id);
        //     workout.repeats_done = value;
        //     setYogaWorkouts(updYogaWorkouts);
        // };

        const progressList = yogaWorkouts[index].exercise.map(exercise => 
            <S.ProgressItem key={exercise.id}>
                <label for={exercise.id}>Сколько раз вы сделали {exercise.name} </label>
                <S.ProgressItemInput placeholder='Введите значение' id={exercise.id} type='number'
                //  onChange={inputHandler({id: exercise.id, value: ((e) => e.target.value)})}  
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