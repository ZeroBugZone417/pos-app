import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">📦 Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="flex justify-between items-center mb-2 p-2 border-b">
            <div>
              <span className="font-medium">{p.name}</span> - Rs.{p.price} 
              <span className="text-gray-500 ml-2">({p.stock} in stock)</span>
            </div>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => addToCart(p)}
            >
              ➕ Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
