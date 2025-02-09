import { useState } from 'react';
import TotalPrice from '@/components/TotalPrice/TotalPrice';
import ProductList from '@/components/ProductList/ProductList';
import data from '@/data/data.json';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

function Cart() {
  const products: Product[] = data;
  // 각 제품의 개수를 관리하는 상태
  const [counts, setCounts] = useState<number[]>(products.map(() => 1));

  // 특정 상품의 개수를 업데이트하는 함수
  const handleCountChange = (index: number, newCount: number) => {
    if (newCount < 1) return; // 최소 1개 제한
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };

  // 총 가격 계산
  const totalPrice = counts.reduce(
    (sum, count, index) => sum + count * data[index].price,
    0
  );

  return (
    <section className="wrapper">
      <h1 className="cart-title">장바구니</h1>
      {/* 상태를 ProductList에 전달 */}
      <ProductList counts={counts} onCountChange={handleCountChange} />
      {/* 총 가격을 TotalPrice에 전달 */}
      <TotalPrice totalPrice={totalPrice} />
    </section>
  );
}

export default Cart;
