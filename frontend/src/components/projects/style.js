import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .card-con {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 600px;
    @media screen and (max-width: 768px) {
      width: 300px;
    }
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
  align-items: center;
  text-align: center;
  width: 300px;
  cursor: pointer;
  padding-bottom: 1rem;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  .img {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
    margin: 0 auto;
    img {
      width: 200px;
      height: 200px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .content {
    padding-top: 1rem;
    span {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.011em;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }
  }
  a {
    color: black;
  }
`;
