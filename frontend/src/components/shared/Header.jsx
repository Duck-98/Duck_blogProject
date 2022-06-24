import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GiPlasticDuck, GiHamburgerMenu } from 'react-icons/gi';
import { Nav, A, NavbarBox, HeaderStyle } from './style';

const Header = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <HeaderStyle>
      <Nav>
        <div className="navbar_logo">
          <Link href="/">
            <A>
              <GiPlasticDuck fontSize="35px" />
              Duck's Blog
            </A>
          </Link>
        </div>
        <NavbarBox open={open}>
          <ul className="navbar_menu">
            <Link href="/intro">
              <li>Intro</li>
            </Link>
            <Link href="/posts/blog">
              <li>Blog</li>
            </Link>
            <Link href="/project">
              <li>Project</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </NavbarBox>
        <NavbarBox open={open}>
          <ul className="navbar_icons">
            <Link href="https://github.com/Duck-98">
              <li className="git">
                <AiFillGithub fontSize="30px" />
              </li>
            </Link>
            <Link href="https://www.instagram.com/duck.__.kn/">
              <li className="insta">
                <AiFillInstagram fontSize="30px" />
              </li>
            </Link>
          </ul>
        </NavbarBox>
        <a className="navbar_btn" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </a>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
