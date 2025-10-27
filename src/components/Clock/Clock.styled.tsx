import styled, { keyframes, css } from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

const CELL_HEIGHT = 50;

const pulse = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.5); }
  100% { transform: scale(1.3); }
`;

export const ClockContainer = styled.div`
  ${flex('row', 'center', 'center')}
  height: 100vh;
  gap: 10px;
  font-family: monospace;
`;

export const Column = styled.div`
  ${flex('column', 'center', 'center')}
  ${size(`${CELL_HEIGHT}px`, `${CELL_HEIGHT}px`)}
  border-radius: 50%;
  border: 2px solid blue;
  background: rgba(0, 0, 255, 0.1);
  position: relative;
`;

export const NumbersList = styled.div<{ offset: number }>`
  ${flex('column', 'center', 'center')}
  transform: translateY(${({ offset }) => offset}px);
  transition: transform 0.3s ease-in-out;
`;

export const Cell = styled.div<{ isActive?: boolean }>`
  ${flex('column', 'center', 'center')}
  ${size(`${CELL_HEIGHT}px`, `${CELL_HEIGHT}px`)}
  font-size: 2rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  transition: all 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${pulse} 1s ease;
      font-weight: bold;
      font-size: 1%.2;
    `}
`;

export const Colon = styled.div`
  ${flex('column', 'center', 'center')}
  font-size: 2rem;
  line-height: ${CELL_HEIGHT}px;
  height: ${CELL_HEIGHT}px;
`;
