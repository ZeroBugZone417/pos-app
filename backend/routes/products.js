// Delete Product
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "✅ Product Deleted!" });
    });
});
