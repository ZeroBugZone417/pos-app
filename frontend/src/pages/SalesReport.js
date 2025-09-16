import React, { useEffect, useState } from "react";

function SalesReport() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sales")
      .then(res => res.json())
      .then(data => setSales(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Sales Report</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr key={s.id}>
              <td className="border px-4 py-2">{s.id}</td>
              <td className="border px-4 py-2">{s.user_id}</td>
              <td className="border px-4 py-2">Rs.{s.total}</td>
              <td className="border px-4 py-2">{new Date(s.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;
