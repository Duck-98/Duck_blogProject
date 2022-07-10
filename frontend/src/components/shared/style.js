import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 8px 12px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: centers;
    padding: 8px 24px;
  }
  .navbar_logo {
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
  .navbar_menu {
    display: flex;
    list-style: none;
    padding-left: 0;
    li {
      padding: 8px 12px;
      color: white;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
  .navbar_icons {
    list-style: none;
    color: white;
    display: flex;
    padding-left: 0;
    li {
      padding: 8px 12px;
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  .navbar_btn {
    display: none;
    position: absolute;
    right: 32px;
    font-size: 30px;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const NavbarBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open === false ? 'none' : 'flex')};
  }
`;

export const Foot = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  min-height: calc(100%-100px);
  color: white;
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .container {
      display: flex;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    .login {
      font-size: 40px;
      cursor: pointer;
    }
  }
  .introduce {
    padding-left: 1rem;
    span {
      font-size: 1rem;
    }
  }
`;

export const FooterStyle = styled.footer`
  bottom: 0;
  width: 100%;
  z-index: 100;
`;
