import reset from 'styled-reset';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { lightTheme, ThemeType } from '.';

const GlobalStyle = createGlobalStyle`
      ${reset} 
      html, body, #__next {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }
      * {
        box-sizing: border-box;
      }
      body {
        overflow-x: hidden;
        width: 100%;
        font-family: 'Noto Sans KR', NanumSquare, notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
        outline: none;
        color: ${lightTheme.LINE_WHITE_COLOR};
      }
`;

export default GlobalStyle;
