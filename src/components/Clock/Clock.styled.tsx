import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

export const ClockContainer = styled.div`
  ${flex('row','center','center')}
  ${size('100%', '100vh')}
  gap: 10px;
  font-family: monospace;
  font-size: 2rem;
`;

export const Column = styled.div`
  ${flex('column')}
  ${size('2rem','2rem')}
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 0px 0px rgba(255, 255, 255, 0);
  position: relative;
  /* overflow: hidden; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    ${size('1px','100%')}
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      transparent,
      rgba(255, 255, 255, 0.3)
    );
  }
`;


export const NumbersList = styled.div<{ offset: number }>`
  display: flex;
  flex-direction: column;
  transform: translateY(${({ offset }) => offset}px);
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
`;

export const Cell = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
