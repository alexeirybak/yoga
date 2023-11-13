import * as S from './ProgressInput.styled';

export default function ProgressInput () {

        //мокап тренировок
        const yogaWorkouts = [{
            id: 1,
            name: 'Утренняя практика',
            type: 'Йога на каждый день / 1 день',
            exercise: [{
                id: 1,
                name: 'Приветствие солнца (10 повторений)'
            }],
            video_file: 'https://youtu.be/oqe98Dxivns',
            isFinished: true
        }, 
        {
            id: 2,
            name: 'Красота и здоровье',
            type: 'Йога на каждый день / 2 день',
            exercise:  [{
                id: 1,
                name: 'Наклон вперед (10 повторений)'
            }, {
                id: 2,
                name: 'Наклон назад (10 повторений)'
            }, {
                id: 3,
                name: 'Поднятие ног, согнутых в коленях (5 повторений)'
            }],
            video_file: 'https://youtu.be/v-xTLFDhoD0',
            isFinished: true
        },
        {
            id: 3,
            name: 'Асаны стоя',
            type: 'Йога на каждый день / 3 день',
            exercise:   [{
                id: 1,
                name: 'Наклон к правой ноге (10 повторений)'
            }, {
                id: 2,
                name: 'Наклон к левой ноге (10 повторений)'
            }, {
                id: 3,
                name: 'Наклон к согнутой правой ноге (10 повторений)'
            }, {
                id: 4,
                name: 'Наклон к согнутой левой ноге (10 повторений)'
            }, {
                id: 5,
                name: 'Асана стоя (5 повторений)'
            }],
            video_file: 'https://youtu.be/WxFz-4YsiEE',
            isFinished: false
        }]

        //мокап выбранного урока из списка
        const index = 1;

        const progressList = yogaWorkouts[index].exercise.map(exercise => 
            <S.ProgressItem key={exercise.id}>
                <label for={exercise.id}>Сколько раз вы сделали {exercise.name}</label>
                <S.ProgressItemInput placeholder='Введите значение' id={exercise.id} type='number' />
            </S.ProgressItem>
            )

    return (
        <S.ProgressContainer>
            <S.ProgressWrapper>
                <S.ProgressCloseButton>
                    <use xlinkHref='/icons/sprite.svg#icon-close' />
                </S.ProgressCloseButton>
                <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
                <S.ProgressList>
                    {progressList}
                    <S.ProgressInputButton type='submit'>Отправить</S.ProgressInputButton>
                </S.ProgressList>
            </S.ProgressWrapper>
        </S.ProgressContainer>
    )
}