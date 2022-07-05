import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
  .sub-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    .title {
      font-size: 25px;
      padding-bottom: 1rem;
      font-weight: bold;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 400px;
  input {
    height: 45px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.GRAY_COLOR};
    &::placeholder {
      font-size: 1rem;
      padding-left: 10px;
    }
  }
  .submit {
    background-color: #0070c9;
    background: linear-gradient(#42a1ec, #0070c9);
    color: ${(props) => props.theme.LINE_WHITE_COLOR};
    border: 1px solid #07c;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Error = styled.span`
  color: red;
`;

export const LoginContainer = styled(Container)`
  height: 550px;
  .register {
    padding-top: 20px;
    color: #0070c9;
    cursor: pointer;
    font-size: 15px;
  }
`;

export const LoginForm = styled(Form)`
  height: 200px;
`;
