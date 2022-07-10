import reset from 'styled-reset';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { lightTheme } from '.';

const GlobalStyle = createGlobalStyle`
      ${reset} 
 

  html,body, #__next {
        width: 100%;
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${lightTheme.MAIN_BACKGROUND_COLOR};
      }
      body {

        overflow-x: hidden;
        font-family: 'Noto Sans KR', NanumSquare, notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
        box-sizing: border-box;
        font-display: swap;
      }
      a {
        text-decoration: none;
        outline: none;
        color: ${lightTheme.LINE_WHITE_COLOR};
      }
`;

export default GlobalStyle;
