import React, { useState, useCallback } from 'react';
import { MdLogin, MdLogout } from 'react-icons/md';
import Link from 'next/link';
import { Foot, FooterStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';

const Footer = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
    // 로그아웃 버튼 눌렀을 때 로그아웃 액션 실행
  }, []);
  return (
    <FooterStyle>
      <Foot>
        <span className="title">Duck_Blog</span>
        <div className="footer">
          <div className="container">
            {me ? (
              <>
                <span>로그아웃하기</span>
                <MdLogout className="login" onClick={onLogOut} loading={logOutLoading} />
              </>
            ) : (
              <>
                <Link href="/login">
                  <MdLogin className="login" />
                </Link>
              </>
            )}
          </div>
          <div className="introduce">
            <span>나덕경 godqhr2256@gmail.com</span>
            <span>Copyright © 2022 Duck all rights reserved.</span>
          </div>
        </div>
      </Foot>
    </FooterStyle>
  );
};

export default Footer;
