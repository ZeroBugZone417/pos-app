import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, stock: 0 });

  // Load products
  const fetchProducts = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => { fetchProducts(); }, []);

  // Add product
  const addProduct = () => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(() => {
        fetchProducts();
        setNewProduct({ name: "", price: 0, stock: 0 });
      });
  };

  // Delete product
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => fetchProducts());
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="border p-1 mr-2"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
          className="border p-1 mr-2"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={addProduct}>
          Add Product
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Products List</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id} className="flex justify-between items-center mb-2 border-b p-2">
              <span>{p.name} - Rs.{p.price} ({p.stock})</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
