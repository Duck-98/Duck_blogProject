import React, { useRef, useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { Container, Form, Error } from '../../components/register/style';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';
const Register = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);
  useEffect(() => {
    if (signUpDone) {
      Router.replace('/login');
    }
  }, [signUpDone]); // 회원가입이 완료되면 메인홈페이지로 이동
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]); // 오류 발생시 오류 경고창  띄우기
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = useCallback((data) => {
    dispatch({
      // SIGN_UP_REQUEST 액션
      type: SIGN_UP_REQUEST,
      data: data,
    });
  });

  const passwordRef = useRef(null);
  passwordRef.current = watch('password');
  return (
    <Container>
      <div className="sub-container">
        <label className="title">회원가입</label>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="닉네임"
            {...register('nickname', {
              required: true,
              maxLength: {
                value: 12,
                message: '닉네임은 12자 이하로 입력하여 주시길 바랍니다.',
              },
            })}
          />
          <Error>{errors.nickname?.message}</Error>
          <input type="text" placeholder="이메일" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          <Error>{errors.email && errors.email.type === 'pattern' && '메일 형식으로 입력해주세요.'}</Error>
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
          <Error>{errors.password?.message}</Error>
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register('passwordCheck', {
              required: true,
              minLength: {
                value: 4,
                message: '비밀번호는 4자 이상 적어주세요.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이하로 입력하여 주시길 바랍니다.',
              },
              validate: (value) => value === passwordRef.current,
            })}
          />
          <Error>{errors.passwordCheck?.message}</Error>
          <Error>
            {errors.passwordCheck &&
              errors.passwordCheck.type === 'validate' &&
              '비밀번호와 비밀번호 확인이 같지 않습니다.'}
          </Error>
          <input className="submit" type="submit" value="회원가입" loading={signUpLoading} />
        </Form>
      </div>
    </Container>
  );
};

export default Register;
