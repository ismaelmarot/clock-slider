import styled, { createGlobalStyle } from 'styled-components';
import { size } from './helpers/setSize';

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    ${size('100%','100%')}
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);
`;

