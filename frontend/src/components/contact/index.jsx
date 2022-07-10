import styled from 'styled-components';
import React from 'react';
import { Container, Card } from './style';

const ContactComponent = () => (
  <Container>
    <Card>
      <div className="img">
        <img src="img/profile.jpeg" alt="profile" />
      </div>
      <div className="content">
        <span className="title"> 나덕경</span>
        <span className="subTitle"> velog</span>
        <span className="text"> https://velog.io/@dduck</span>
        <span className="subTitle"> Github</span>
        <span className="text"> https://github.com/Duck-98</span>
        <span className="subTitle"> Gmail</span>
        <span className="text"> godqhr2256@gmail.com</span>
        <a href="https://www.notion.so/1f9e3f41d31f49aa954cdb9d1b9bcab4">
          Notion<br></br>
          <span className="notion"> https://www.notion.so/1f9e3f41d31f49aa954cdb9d1b9bcab4</span>
        </a>
      </div>
    </Card>
  </Container>
);

export default ContactComponent;
