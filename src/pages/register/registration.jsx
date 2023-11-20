import { useEffect, useState } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../store/slices/userSlices";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { setLogo } from '../../store/slices/logoSlices';

export function Register() {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dublicatePass, setDublicatePass] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  useEffect(() => {
    setError(null);
  }, [newEmail, password, dublicatePass]);
  useEffect(() => {
  dispatch(setLogo({
  logo: "white",
  }))
}, []);
  const handleRegister = () => {
    // if(password === dublicatePass) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, newEmail, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          userMail: user.email,
          token: user.accessToken,
          id: user.uid,
        }))
        navigate('/');
      })
      .catch(console.error)
    // }
    // if(password !== dublicatePass) {
    //   setError('Пароли не совпадают')
    // }
  }
  return (
    <S.Wrapper>
      <S.ContainerEnter>
      <S.ModalFormLoginTopImg src="/logo-top.png" alt="logo" />
        <S.ModalBlock>
          <S.ModalFormLogin>
            <Link to="/">
            <S.ModalFormLoginImg src="/logo.png" alt="logo" />
            </Link>
            <S.ModalFormLoginInput>
              <S.ModalInput 
              type='email' 
              placeholder='Почта'
              value={newEmail} 
              onChange={(e) => setNewEmail(e.target.value)} 
              />
              <S.ModalInput
                type='password'
                placeholder='Пароль'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
                <S.ModalInputConfirmPassword
                  type='password'
                  placeholder='Повторите пароль'
                  value={dublicatePass} 
                  onChange={(e) => setDublicatePass(e.target.value)}
                />
                        {error ? <p style={{color: "red"}}>{error};</p> : null}
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalBtnSignup onClick={handleRegister}>
                Зарегистрироваться
              </S.ModalBtnSignup>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}