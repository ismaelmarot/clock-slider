import styled, { createGlobalStyle } from 'styled-components'
import { size } from './helpers/setSize'
import img from '../src/assets/img.jpg'

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    ${size('100%','100%')}
  }
`

export const AppContainer = styled.div`
  min-height: 150vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`