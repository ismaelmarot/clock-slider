import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

const CELL_HEIGHT = 50;

export const ClockContainer = styled.div`
  ${flex('row','center','center')}
  gap: 10px;
  height: 100vh;
  font-family: monospace;
`;

export const Column = styled.div`
  ${flex('column','center','center')}
  ${size(`${CELL_HEIGHT}px`, `${CELL_HEIGHT}px`)}
  border-radius: 50%;
  border: 2px solid blue;
  background: rgba(0,0,255,0.1);
  position: relative;
`;

export const NumbersList = styled.div<{ offset: number }>`
  ${flex('column','center','center')}
  transform: translateY(${({ offset }) => offset}px);
  transition: transform 0.3s ease-in-out;
`;

export const Cell = styled.div`
  ${flex('column','center','center')}
  ${size(`${CELL_HEIGHT}px`, `${CELL_HEIGHT}px`)}
  line-height: ${CELL_HEIGHT}px;
  font-size: 2rem;
`;
