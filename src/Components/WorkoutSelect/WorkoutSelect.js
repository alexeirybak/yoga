import { Link } from 'react-router-dom';
import * as S from './WorkoutSelect.styled';

export default function WorkoutSelect ({ closeForm, yogaWorkouts, setYogaWorkouts }) {
    
    //нужно настроить динамическую isFinished в зависимости от repeats и repeats_done как будет готова БД
    

    const workoutList = yogaWorkouts.map(workout =>
        <Link to={`/training/${workout.id}`}> 
        <S.SelectItem key={workout.id} $isFinished={workout.isFinished}>
            {workout.name}
            {workout.isFinished ? <S.SelectItemCheckboxImg>
                <use xlinkHref='/icons/sprite.svg#icon-complete' />
            </S.SelectItemCheckboxImg> : ''}
            <S.SelectItemType>
                {workout.type}
            </S.SelectItemType>               
        </S.SelectItem>
        </Link>
    )

    return (
        <S.SelectContainer>
            <S.SelectWrapper>
                <S.SelectCloseIconSvg onClick={() => closeForm()}>
                <use xlinkHref='/icons/sprite.svg#icon-close' />
                </S.SelectCloseIconSvg>
                <S.SelectHeader>
                    Выберите тренировку
                </S.SelectHeader>
                <S.SelectList>
                    {workoutList}
                </S.SelectList>
            </S.SelectWrapper>
        </S.SelectContainer>
    )
}