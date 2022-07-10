import styled from 'styled-components';

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      min-width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    padding-bottom: 3rem;
    ul {
      padding-top: 2rem;
      li {
        font-size: 1.3rem;
        padding-top: 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 3rem;
    }
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  .subTitle {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .profile {
    img {
      width: 300px;
      height: 400px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  }

  .intro {
    @media screen and (max-width: 768px) {
      display: none;
    }
    h1 {
      color: #333;
      font-family: tahoma;
      font-size: 3rem;
      font-weight: 100;
      line-height: 1.5;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      width: 550px;
      max-width: 550px;
      span {
        max-font-size: 40px;
      }
      .message {
        background-color: yellow;
        color: #333;
        font-weight: 900;
        overflow: hidden;
        position: absolute;
        padding-left: 0.5rem;
        top: 0.2rem;
        left: 270px;
        animation: openclose 5s ease-in-out infinite;
        .word1,
        .word2,
        .word3 {
          font-family: tahoma;
        }
        @keyframes openclose {
          0% {
            top: 0.2rem;
            max-width: 0;
          }
          5% {
            max-width: 0;
          }
          15% {
            max-width: 230px;
          }
          30% {
            top: 0.2rem;
            max-width: 230px;
          }
          33% {
            top: 0.2rem;
            max-width: 0;
          }
          35% {
            top: 0.2rem;
            max-width: 0;
          }
          38% {
            top: -4.5rem;
          }
          48% {
            top: -4.5rem;
            max-width: 230px;
          }
          62% {
            top: -4.5rem;
            max-width: 230px;
          }
          66% {
            top: -4.5rem;
            max-width: 0;
            text-indent: 0;
          }
          71% {
            top: -9rem;
            max-width: 0;
            text-indent: 5px;
          }
          86% {
            top: -9rem;
            max-width: 285px;
          }
          95% {
            top: -9rem;
            max-width: 285px;
          }
          98% {
            top: -9rem;
            max-width: 0;
            text-indent: 5px;
          }
          100% {
            top: 0;
            max-width: 0;
            text-indent: 0;
          }
        }
      }
    }
  }
`;

export const IntroCon = styled.div`
  z-index: 100;
  width: 100%;
`;
