import { DigitalStrip, DigitColumnStyle, Digit } from './DigitColumn.styled';

interface DigitColumnProps {
  digits: number[];
  active: number;
}

const DigitColumn = ({ digits, active }: DigitColumnProps) => {
  return (
    <DigitColumnStyle>
      <DigitalStrip active={active}>
        {digits.map((d) => (
          <Digit key={d} $isActive={d === active}>
            {d}
          </Digit>
        ))}
      </DigitalStrip>
    </DigitColumnStyle>
  );
};

export default DigitColumn;
