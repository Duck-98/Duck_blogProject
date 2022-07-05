import React from 'react';
import styled from 'styled-components';
import { BsPeople, BsPerson } from 'react-icons/bs';
import { Container } from '../intro/style';
import { ProjectCon, Card } from './style';

const Projects = () => (
  <>
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
    </Container>
    <ProjectCon>
      <div className="con">
        <BsPeople /> <span>팀 프로젝트</span>
      </div>
      <div className="card-con">
        <Card>
          <a href="https://www.notion.so/655757b339254095b3567d7faecc071a">
            <div className="img">
              <img src="img/갓팅.png" alt="app" />
            </div>
            <div className="content">
              <span className="title"> 소개팅 웹 앱 서비스</span>
            </div>
          </a>
        </Card>
        <Card>
          <a href="https://www.notion.so/f10de6f0cb2f40d39249c5b402a5f73d">
            <div className="img">
              <img src="img/mask.png" alt="profile" />
            </div>
            <div className="content">
              <span className="title">마스크 착용 유무 판단 프로그램</span>
            </div>
          </a>
        </Card>
      </div>
    </ProjectCon>
    <ProjectCon>
      <div className="con">
        <BsPerson /> <span>개인 프로젝트</span>
      </div>
      <div className="card-con">
        <Card>
          <a href="https://www.notion.so/d8e2005b146e4f1b9fe5cb4c563f3157">
            <div className="img">
              <img src="img/taxi.png" alt="profile" />
            </div>
            <div className="content">
              <span className="title">택시팟 웹앱 서비스</span>
            </div>
          </a>
        </Card>

        <Card>
          <a href="https://www.notion.so/Duck-Blog-3abcb8b528ba47bc8b4d22c4935cfbcc">
            <div className="img">
              <img src="img/Duck-Blog.png" alt="profile" />
            </div>
            <div className="content">
              <span className="title">Duck-Blog</span>
            </div>
          </a>
        </Card>
      </div>
    </ProjectCon>
  </>
);

export default Projects;
