import './TotalPrice.css';

interface TotalPriceProps {
  totalPrice: number;
}
function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <p className="total-price">구매총액 : {totalPrice.toLocaleString()}원</p>
  );
}

export default TotalPrice;
