import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .img {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    .title {
      font-size: 25px;
      font-weight: bold;
    }
    .subTitle {
      font-size: 20px;
      font-weight: bold;
      padding-top: 1rem;
    }
    a {
      padding-top: 1rem;
      font-size: 20px;
      font-weight: bold;
      color: black;
      span {
        font-weight: normal;
        font-size: 16px;
      }
    }
  }
`;
