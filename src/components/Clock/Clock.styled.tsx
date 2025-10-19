import styled from 'styled-components';

export const ClockContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: monospace;
  align-items: center;
`;

export const Column = styled.div`
  width: 30px;
  height: 30px; /* altura de un solo número */
  /* overflow: hidden; */
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const NumbersList = styled.div<{ offset: number }>`
  display: flex;
  flex-direction: column;
  transform: translateY(${({ offset }) => offset}px);
  transition: transform 0.3s ease-in-out;
`;

export const Cell = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
