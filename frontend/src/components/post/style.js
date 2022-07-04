import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10rem;
  justify-content: space-around;
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  margin-top: 10rem;
  .btn {
    border-radius: 10px;
    border: none;
    width: 100px;
    height: 30px;
    font-weight: bold;
    font-size: 15px;
    background-color: ${(props) => props.theme.BUTTON_COLOR};
    color: ${(props) => props.theme.LINE_WHITE_COLOR};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.BUTTON_COLOR_HOVER};
    }
  }
  .tag-title {
    font-weight: bold;
  }
  .tag-container {
    height: 280px;
    border-top: 1px solid black;
  }
  .tag-content {
    padding-top: 1rem;
    list-style: none;
    li {
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.CURSOR_COLOR};
      }
    }
  }
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  cursor: pointer;
  .post-img {
    width: 500px;
    height: 300px;
  }
  .post-content {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding-top: 1rem;
    .post-title {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 1rem;
    }
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
    cursor: pointer;
    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      height: 20px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.BACKGROUND_COLOR};
      font-size: 15px;
      color: ${(props) => props.theme.LINE_WHITE_COLOR};
    }
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #0070c9;
  background: linear-gradient(#42a1ec, #0070c9);
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.GRAY_COLOR};
  font-size: 18px;
  font-weight; bold;
  margin: 0 auto;
  margin-top: 2rem;
  cursor: pointer;
`;

export const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
  .title {
    height: 80px;
    font-size: 40px;
    border: none;
    border-bottom: 1px solid black;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const PostCon = styled(Container)`
  flex-direction: column;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
  }
  .remove-con {
    padding-left: 30rem;
    padding-bottom: 1rem;
    button {
      border: none;
      border-radius: 5px;
      background-color: ${(props) => props.theme.BACKGROUND_COLOR};
      color: ${(props) => props.theme.LINE_WHITE_COLOR};
      height: 20px;
      width: 20px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.CURSOR_COLOR};
      }
    }
  }
`;

export const ImageCon = styled.div`
  display: flex;
  .button-con {
    display: flex;
    flex-direction: column;
  }
  .img-box {
    padding-top: 1rem;
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    span {
      font-weight: bold;
    }
  }
`;

export const TagInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  &::placeholder {
    color: ${(props) => props.theme.LINE_WHITE_COLOR};
  }
`;
