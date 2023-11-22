import { useEffect } from "react";
import * as S from "./styles";

export const CourseAppointment = ({ onClose, isOpen }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <S.Container>
      <S.ContentBlock>
        <S.Closer onClick={onClose}>
          <S.CloserPoint>
            <S.CloserIcon src="/img/close.png" alt="закрыть" />
          </S.CloserPoint>
        </S.Closer>
        <S.MainContent>
          <S.Booked>Вы успешно записались!</S.Booked>
          <S.BlockImg>
            <S.Hand src="/img/hand.png" alt="OK" />
          </S.BlockImg>
        </S.MainContent>
      </S.ContentBlock>
    </S.Container>
  );
};
