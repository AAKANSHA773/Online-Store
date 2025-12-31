import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProductList(json);
  };

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Products
      </h2>

     <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
