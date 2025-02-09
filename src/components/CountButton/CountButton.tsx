import './CountButton.css';

interface CountButtonProps {
  count: number;
  onCountChange: (newCount: number) => void;
}

function CountButton({ count, onCountChange }: CountButtonProps) {
  return (
    <div className="count-wrap">
      <button type="button" onClick={() => onCountChange(count - 1)}>
        -
      </button>
      <span className="count-num">{count}</span>
      <button type="button" onClick={() => onCountChange(count + 1)}>
        +
      </button>
    </div>
  );
}

export default CountButton;
