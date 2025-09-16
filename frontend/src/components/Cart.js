import React from "react";

function Cart({ cart, removeFromCart, checkout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <ul>
          {cart.map((c, i) => (
            <li key={i} className="flex justify-between items-center mb-2 p-2 border-b">
              <div>{c.name} x {c.qty} = Rs.{c.price * c.qty}</div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => removeFromCart(c.id)}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="font-bold mt-4">Total: Rs.{total}</h3>
      {cart.length > 0 && (
        <button
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={checkout}
        >
          ✅ Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
