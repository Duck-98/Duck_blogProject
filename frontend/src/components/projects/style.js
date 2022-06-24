import styled from 'styled-components';
import { SubContainer } from '../intro/style';

export const ProjectCon = styled.div`
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 3rem;
  .title {
  }
  .card-con {
    display: flex;
    flex-direction: row;
  }
  .con {
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  cursor: pointer;
  .img {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 30px;
  }
  span {
    font-size: 20px;
  }
`;
