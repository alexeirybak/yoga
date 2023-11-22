import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const NotFound = () => {
  return (
    <S.Block404>
      <S.Img src='/img/yoga404.gif' />
      <S.Yoga>
        Йог ушел в нирвану. Йоге хорошо, его сегодня не будет <br></br>Ашипка 404 ((
      </S.Yoga>
      <NavLink to='/'>
        <S.GoToMain>На главную</S.GoToMain>
      </NavLink>
    </S.Block404>
  );
};