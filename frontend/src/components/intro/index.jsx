import React, { useEffect } from 'react';
import { Container, SubContainer, IntroCon } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const Intro = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);
  return (
    <IntroCon>
      <Container>
        <div className="intro">
          <h1>
            <div className="con">
              <span>always be</span>
              <div className="message">
                <div className="word1">steady</div>
                <div className="word2">coding</div>
                <div className="word3">creating</div>
              </div>
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
    </IntroCon>
  );
};

export default Intro;
