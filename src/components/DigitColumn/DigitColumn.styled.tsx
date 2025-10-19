import styled from 'styled-components';

interface DigitalStripProps {
  active: number;
}

// Contenedor de la columna
export const DigitColumnStyle = styled.div`
  width: 2.5em;
  height: 2.5em;        /* altura visible de un dígito */
  /* overflow: hidden; */
  border: 1px solid #333;
  position: relative;
`;

// Strip de dígitos apilados verticalmente
export const DigitalStrip = styled.div<DigitalStripProps>`
  display: flex;
  flex-direction: column;
  transform: ${({ active }) => `translateY(-${active * 2.5}em)`};
  transition: transform 0.5s ease-in-out;
`;

// Cada dígito
export const Digit = styled.div<{ $isActive: boolean }>`
  height: 2.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: ${({ $isActive }) => ($isActive ? 'black' : 'gray')};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
`;
