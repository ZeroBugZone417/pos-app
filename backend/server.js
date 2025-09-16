const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");
const salesRoutes = require("./routes/sales");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);

app.get("/", (req, res) => {
    res.send("🚀 POS Backend is Running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
