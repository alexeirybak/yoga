import * as S from './WorkoutSelect.styled';

export default function WorkoutSelect () {
    
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
        video_file: 'https://youtu.be/v-xTLFDhoD0',
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


    const workoutList = yogaWorkouts.map(workout => 
        <S.SelectItem key={workout.id} $isFinished={workout.isFinished}>
            {workout.name}
            {workout.isFinished ? <S.SelectItemCheckboxImg>
                <use xlinkHref='/icons/sprite.svg#icon-complete' />
            </S.SelectItemCheckboxImg> : ''}
            <S.SelectItemType>
                {workout.type}
            </S.SelectItemType>               
        </S.SelectItem>
    )

    return (
        <S.SelectContainer>
            <S.SelectWrapper>
                <S.SelectCloseIconSvg>
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