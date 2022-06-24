import React from 'react';
import { Container, SubContainer } from './style';

const Intro = () => (
  <Container>
    <div className="intro">
      <h1>
        <span>always be</span>
        <div className="message">
          <div className="word1">steady</div>
          <div className="word2">coding</div>
          <div className="word3">creating</div>
        </div>
      </h1>
    </div>
    <SubContainer>
      <div className="profile">
        <img src="img/profile.jpeg" alt="profile" />
      </div>
      <div className="content">
        <span className="title">안녕하세요 나덕경입니다 &#x1F680;</span>
        <span className="subTitle"> College student, Front-End Engineer Developer 💻</span>
        <ul>
          <li>일상 생활 속의 불편함을 개선하고 싶은 개발자</li>
          <li>선한 영향력을 주고 싶은 개발자</li>
          <li>주어진 책임감을 다하고 끈기 있는 개발자</li>
        </ul>
      </div>
    </SubContainer>
  </Container>
);

export default Intro;
