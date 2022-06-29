import React, { useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Error } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';
const Register = () => {
  const dispatch = useDispatch();
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
  /*const onSubmit = (data) => {
    console.log(data);
  };*/
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
          <input className="submit" type="submit" value="회원가입" />
        </Form>
      </div>
    </Container>
  );
};

export default Register;
