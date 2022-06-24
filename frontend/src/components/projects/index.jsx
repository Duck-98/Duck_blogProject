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
          <div className="img">이미지</div>
          <div className="content">
            <span className="title"> 제목</span>
          </div>
        </Card>
        <Card>
          <div className="img">이미지</div>
          <div className="content">
            <span className="title"> 제목</span>
          </div>
        </Card>
      </div>
    </ProjectCon>
    <ProjectCon>
      <div className="con">
        <BsPerson /> <span>개인 프로젝트</span>
      </div>
      <div className="card-con">
        <Card>
          <div className="img">이미지</div>
          <div className="content">
            <span className="title"> 제목</span>
          </div>
        </Card>
      </div>
    </ProjectCon>
  </>
);

export default Projects;
