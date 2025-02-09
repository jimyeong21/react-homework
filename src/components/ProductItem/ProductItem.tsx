import './ProductItem.css';

interface ProductItemProps {
  title: string;
  price: number;
  image: string;
}

function ProductItem({ title, price, image }: ProductItemProps) {
  return (
    <div className="product-info">
      <img className="product-img" src={image} alt={title} />
      <div>
        <p className="product-name">{title}</p>
        <span className="product-price">{price.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default ProductItem;
