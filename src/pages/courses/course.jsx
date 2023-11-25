
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { textAboutTraining } from "../../helpers/coursesDescriptions";
import { Header } from "../../Components/header/header";
import { useAuth } from "../../hooks/use-auth";
import { setLogo } from "../../store/slices/logoSlices";
import { CourseAppointment } from "../../Components/courseAppointment/courseAppoinment";
import * as S from "./courseStyle";
import { useDataBase } from "../../firebase/fireCourses";

export const Course = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.course);
  const course = textAboutTraining.find((course) => course.id === Number(id));
  const [showCourseAppointModal, setShowCourseAppointModal] = useState(false);
  useDataBase(course._id);
  useEffect(() => {
    dispatch(setLogo({ logo: "black" }));
  }, [dispatch]);

  const handlePopUp = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      setShowCourseAppointModal(true);
    }
  };

  const handleModalClose = () => {
    setShowCourseAppointModal(false);
  };

  useEffect(() => {
    dispatch(setLogo({
    logo: "black",
    }))

  }, []);

  return (
    <S.Container>
      <S.ContentBlock>
        <Header />
        <S.HeadContentBlock id={id}>
          <S.SubTitleBlock>
            <S.TitleText>{course.title}</S.TitleText>
          </S.SubTitleBlock>
        </S.HeadContentBlock>

        <S.TitleLikeText>Подойдет для вас, если:</S.TitleLikeText>
        <S.LikesBlock>
          {data.benefits.map((item, index) => (
            <S.LikesSubBlock key={index}>
              <S.LikesImg src={`/img/n${index + 1}.png`} alt="number" />
              <S.LikesTextBlock>
                <S.LikesText>{item}</S.LikesText>
              </S.LikesTextBlock>
            </S.LikesSubBlock>
          ))}
        </S.LikesBlock>

        <S.TitleDirectionsText>Направления:</S.TitleDirectionsText>
        <S.DirectionsBlock>
          {data.directions.map((item, index) => (
            <S.DirectionsSubBlock key={index}>
              <S.DirectionsList>
                <S.DirectionsListLi>{item}</S.DirectionsListLi>
              </S.DirectionsList>
            </S.DirectionsSubBlock>
          ))}
        </S.DirectionsBlock>

        <S.InfoBlock>
          <S.InfoText>{course.description}</S.InfoText>
        </S.InfoBlock>

        <S.FooterContentBlock>
          <S.FooterSubBlock>
            <S.FooterTextBlock>
              <S.FooterText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
              </S.FooterText>
            </S.FooterTextBlock>
            <S.SignUpTrainingButton onClick={handlePopUp}>
              Записаться на тренировку
            </S.SignUpTrainingButton>
            <CourseAppointment
              isOpen={showCourseAppointModal}
              onClose={handleModalClose}
            />
          </S.FooterSubBlock>
          <S.HandsetImg src="/img/phone.png" alt="Handset" />
        </S.FooterContentBlock>
      </S.ContentBlock>
    </S.Container>
  );
};
