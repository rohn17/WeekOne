import React from "react";

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - ₹{product.price}
        </li>
      ))}
    </ul>
  );
}

function Task6() {
  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 },
  ];

  return (
    <div className="card">
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Task6;