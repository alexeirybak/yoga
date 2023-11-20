
import { useEffect, useState } from 'react'
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlices";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setLogo } from '../../store/slices/logoSlices';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  useEffect(() => {
    dispatch(setLogo({
    logo: "white",
    }))
  }, []);
  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }))
      navigate('/');
    })
    .catch(console.error)
  }


  return (
    <S.Wrapper>
      <S.ContainerEnter>
      <S.ModalFormLoginTopImg src="/logo-top.png" alt="logo" />
        <S.ModalBlock>
          <S.ModalFormLogin action="#">

            <Link to="/">
              <S.ModalFormLoginImg src="/logo.png" alt="logo" />
            </Link>
            <S.ModalFormLoginInput>
              <S.ModalInput 
              type="email" 
              placeholder="Почта" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}/>
              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalButtonEnter
              onClick={handleLogin}
              >
                Войти
              </S.ModalButtonEnter>
              <S.ModalBtnSignup><Link to="/register">Зарегистрироваться</Link></S.ModalBtnSignup>

            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
