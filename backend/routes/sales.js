const express = require("express");
const router = express.Router();
const db = require("../db");

// ➕ Add Sale
router.post("/", (req, res) => {
    const { user_id, items } = req.body;
    let total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

    db.query("INSERT INTO sales (user_id, total) VALUES (?, ?)", 
        [user_id, total],
        (err, result) => {
            if (err) return res.status(500).send(err);

            const saleId = result.insertId;

            items.forEach(item => {
                db.query(
                    "INSERT INTO sale_items (sale_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
                    [saleId, item.id, item.qty, item.price]
                );
            });

            res.json({ message: "✅ Sale Recorded!", saleId });
        }
    );
});

// 📊 Get Sales
router.get("/", (req, res) => {
    db.query("SELECT * FROM sales ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
