import React, { useState, useEffect } from 'react';
import { ClockContainer, Column, NumbersList, Cell } from './Clock.styled';
import { DIGITS } from '../../constants/digits';

const CELL_HEIGHT = 50; // altura de cada número

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const digits: { col: readonly string[]; val: string }[] = [
    { col: DIGITS.H1, val: hours[0] },
    { col: DIGITS.H2, val: hours[1] },
    { col: DIGITS.M1, val: minutes[0] },
    { col: DIGITS.M2, val: minutes[1] },
    { col: DIGITS.S1, val: seconds[0] },
    { col: DIGITS.S2, val: seconds[1] },
  ];

  return (
    <ClockContainer>
      {digits.map((digit, i) => {
        const index = digit.col.findIndex((n) => n === digit.val);
        const offset = (-index * CELL_HEIGHT) +230;

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
