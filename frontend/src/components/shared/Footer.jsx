import React, { useState, useCallback } from 'react';
import { MdLogin, MdLogout } from 'react-icons/md';
import Link from 'next/link';
import { Foot } from './style';

const Footer = () => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Foot>
      <div className="footer">
        <div className="container">
          {isLoggedIn ? (
            <MdLogout className="login" onClick={onLogout} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Link href="/login">
              <MdLogin className="login" setIsLoggedIn={setIsLoggedIn} />
            </Link>
          )}
        </div>
        <div>
          <span>나덕경 godqhr2256@gmail.com</span>
          <span>Copyright © 2022 Duck all rights reserved.</span>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
