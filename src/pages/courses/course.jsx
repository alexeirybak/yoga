
import * as S from "./courseStyle";
import { Header } from "../../Components/header/header";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
export default function Course() {
  const {isAuth, email} = useAuth();
  const navigate = useNavigate();

    const textAboutTraining = [
        { text: 'Йога для новичков'},
        { text: 'Классическая йога'},
        { text: 'Йогатерапия'},
        { text: 'Кундалини-йога'},
        { text: 'Хатха-йога'},
        { text: 'Аштанга-йога'},
    ]
    const textByNumber = [
        { text: 'Давно хотели попробовать йогу, но не решались начать' },
        { text: 'Хотите укрепить позвоночник, избавиться от болей в спине и суставах' },
        { text: 'Ищете активность, полезную для тела и души' },
    ]
    const description = 'это философия здорового образа жизни. Тот, кто занимается йогой, становится здоровее и выносливее, после занятий чувствует прилив сил, а также с новой силой может ощутить вкус к жизни. Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
  return (
    <S.Container>
      <S.ContentBlock>
        <Header />
        <S.HeadContentBlock>
          <S.SubTitleBlock>
            <S.TitleText>Йога</S.TitleText>
            <S.ButtonPay >Купить курс</S.ButtonPay>
          </S.SubTitleBlock>
        </S.HeadContentBlock>
        <S.TitleLikeText>Подойдет для вас, если:</S.TitleLikeText>
        <S.LikesBlock>
          <S.LikesSubBlock>
            <S.LikesImg src="/img/n1.png" alt="number" />
            <S.LikesTextBlock>
              <S.LikesText>{textByNumber[0].text}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src="/img/n2.png" alt="number" />
            <S.LikesTextBlock>
              <S.LikesText>{textByNumber[1].text}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src="/img/n3.png" alt="number" />
            <S.LikesTextBlock>
              <S.LikesText>{textByNumber[2].text}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
        </S.LikesBlock>

        <S.TitleDirectionsText>Направления:</S.TitleDirectionsText>

        <S.DirectionsBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              {textAboutTraining[0] && (
                <S.DirectionsListLi>{textAboutTraining[0].text}</S.DirectionsListLi>
              )}
              {textAboutTraining[1] && (
                <S.DirectionsListLi>{textAboutTraining[1].text}</S.DirectionsListLi>
              )}
              {textAboutTraining[2] && (
                <S.DirectionsListLi>{textAboutTraining[2].text}</S.DirectionsListLi>
              )}
            </S.DirectionsList>
          </S.DirectionsSubBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              {textAboutTraining[3] && (
                <S.DirectionsListLi>{textAboutTraining[3].text}</S.DirectionsListLi>
              )}
              {textAboutTraining[4] && (
                <S.DirectionsListLi>{textAboutTraining[4].text}</S.DirectionsListLi>
              )}
              {textAboutTraining[5] && (
                <S.DirectionsListLi>{textAboutTraining[5].text}</S.DirectionsListLi>
              )}
            </S.DirectionsList>
          </S.DirectionsSubBlock>
        </S.DirectionsBlock>

        <S.InfoBlock>
          <S.InfoText>{description}</S.InfoText>
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
            <S.SignUpTrainingButton>
              Записаться на тренировку
            </S.SignUpTrainingButton>
          </S.FooterSubBlock>
          <S.HandsetImg src="/img/phone.png" alt="Handset" />
        </S.FooterContentBlock>
      </S.ContentBlock>
    </S.Container>
  );
}