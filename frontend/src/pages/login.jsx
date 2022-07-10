import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { LoginContainer, LoginForm, Error } from '../components/register/style';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const Register = () => {
  const dispatch = useDispatch();
  const { logInError, logInDone } = useSelector((state) => state.user);
  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  useEffect(() => {
    if (logInDone) {
      Router.push('/');
    }
  }, [logInDone]); // 로그인이 완료되면 이전 홈페이지로 이동
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginRequestAction(data));
  };
  return (
    <LoginContainer>
      <div className="sub-container">
        <label className="title">로그인</label>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="이메일" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          <input
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: true,
              minLength: {
                value: 4,
                message: '비밀번호는 4자 이상 적어주세요.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이하로 입력하여 주시길 바랍니다.',
              },
            })}
          />
          <Error>{errors.email && errors.email.type === 'pattern' && '메일 형식으로 입력해주세요.'}</Error>
          <Error>{errors.password?.message}</Error>
          <input className="submit" type="submit" value="로그인" />
        </LoginForm>
        <Link href="/register">
          <label className="register">회원가입</label>
        </Link>
      </div>
    </LoginContainer>
  );
};

export default Register;
