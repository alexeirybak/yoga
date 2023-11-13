import * as S from './ValidatedProgress.styled'

export default function ValidatedProgress () {


    return (
        <S.ValidatedProgressContainer>
            <S.ValidatedProgressWrapper>
                <S.ValidatedProgressHeader>Ваш прогресс засчитан!</S.ValidatedProgressHeader>
                <S.ValidatedProgressSvg>
                    <use xlinkHref='/icons/sprite.svg#icon-ok-hand' />
                </S.ValidatedProgressSvg>
            </S.ValidatedProgressWrapper>
        </S.ValidatedProgressContainer>
    )
}