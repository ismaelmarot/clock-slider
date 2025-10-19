import "./DigitColumn.css";

interface DigitColumnProps {
  digits: number[];
  active: number;
}

const DigitColumn = ({ digits, active }: DigitColumnProps) => {
  return (
    <div className="digit-column">
      <div
        className="digit-strip"
        style={{ transform: `translateY(-${active * 2.5}em)` }}
      >
        {digits.map((d) => (
          <div key={d} className={`digit ${d === active ? "active" : ""}`}>
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitColumn;
