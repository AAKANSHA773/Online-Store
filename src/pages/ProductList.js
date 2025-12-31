import React from 'react'
import ProductCard from '../components/ProductCard';


const ProductList = () => {
  
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid gap-4 mb-6 md:grid-cols-2">
       <ProductCard/>
      </div>
    </main>
  );
};

export default ProductList;
