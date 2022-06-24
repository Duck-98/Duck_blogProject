import React from 'react';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link';
import { Foot } from './style';

const Footer = () => (
  <Foot>
    <div className="footer">
      <Link href="/login">
        <MdLogin className="login" />
      </Link>
      <div>
        <span>나덕경 godqhr2256@gmail.com</span>
        <span>Copyright © 2022 Duck all rights reserved.</span>
      </div>
    </div>
  </Foot>
);

export default Footer;
