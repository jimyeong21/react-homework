import './ProductList.css';
import data from '@/data/data.json';
import CountButton from '../CountButton/CountButton';
import ProductItem from '../ProductItem/ProductItem';

interface ProductListProps {
  counts: number[];
  onCountChange: (index: number, newCount: number) => void;
}

function ProductList({ counts, onCountChange }: ProductListProps) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id} className="product-item">
          <ProductItem
            title={item.title}
            price={item.price}
            image={item.image}
          />
          <CountButton
            count={counts[index]}
            onCountChange={(newCount) => onCountChange(index, newCount)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
