import React, { useState, useEffect } from 'react';
import { ClockContainer, Column, NumbersList, Cell } from './Clock.styled';

// Columnas de dígitos
const H1 = ['0', '1', '2', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const H2 = ['0','1','2','3','4','5','6','7','8','9'];
const M1 = ['0','1','2','3','4','5',' ', ' ', ' ', ' '];
const M2 = ['0','1','2','3','4','5','6','7','8','9'];
const S1 = ['0','1','2','3','4','5',' ', ' ', ' ', ' '];
const S2 = ['0','1','2','3','4','5','6','7','8','9'];

const CELL_HEIGHT = 30; // altura de cada celda

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const digits = [
    { col: H1, val: hours[0] },
    { col: H2, val: hours[1] },
    { col: M1, val: minutes[0] },
    { col: M2, val: minutes[1] },
    { col: S1, val: seconds[0] },
    { col: S2, val: seconds[1] },
  ];

  return (
    <ClockContainer>
      {digits.map((digit, i) => {
        const index = digit.col.findIndex(n => n === digit.val);
        const offset = -index * CELL_HEIGHT; // mueve el número actual al centro
        return (
          <Column key={i}>
            <NumbersList offset={offset}>
              {digit.col.map((num, idx) => (
                <Cell key={idx}>{num}</Cell>
              ))}
            </NumbersList>
          </Column>
        );
      })}
    </ClockContainer>
  );
};

export default Clock;
