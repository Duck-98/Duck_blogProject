import React from 'react';
import styled from 'styled-components';
import { BsPeople, BsPerson } from 'react-icons/bs';
import { Container, SubContainer, Card } from './style';
const Projects = () => (
  <>
    <Container>
      <SubContainer>
        <div className="con">
          <BsPeople /> <span>팀 프로젝트</span>
        </div>
        <div className="card-con">
          <Card>
            <a href="https://miniature-river-6e1.notion.site/d8e2005b146e4f1b9fe5cb4c563f3157">
              <div className="img">
                <img src="img/갓팅.png" alt="app" />
              </div>
              <div className="content">
                <span className="title"> 소개팅 웹 앱 서비스</span>
              </div>
            </a>
          </Card>
          <Card>
            <a href="https://miniature-river-6e1.notion.site/f10de6f0cb2f40d39249c5b402a5f73d">
              <div className="img">
                <img src="img/mask.png" alt="profile" />
              </div>
              <div className="content">
                <span className="title">마스크 착용 유무 판단 프로그램</span>
              </div>
            </a>
          </Card>
        </div>
      </SubContainer>
      <SubContainer>
        <div className="con">
          <BsPerson /> <span>개인 프로젝트</span>
        </div>
        <div className="card-con">
          <Card>
            <a href="https://miniature-river-6e1.notion.site/655757b339254095b3567d7faecc071a">
              <div className="img">
                <img src="img/taxi.png" alt="profile" />
              </div>
              <div className="content">
                <span className="title">택시팟 웹앱 서비스</span>
              </div>
            </a>
          </Card>

          <Card>
            <a href="https://miniature-river-6e1.notion.site/Duck-Blog-3abcb8b528ba47bc8b4d22c4935cfbcc">
              <div className="img">
                <img src="img/Duck-Blog.png" alt="profile" />
              </div>
              <div className="content">
                <span className="title">Duck_Blog</span>
              </div>
            </a>
          </Card>
        </div>
      </SubContainer>
    </Container>
  </>
);

export default Projects;
