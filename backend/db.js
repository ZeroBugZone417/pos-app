const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",      // 🟢 DB username
    password: "",       // 🟢 DB password
    database: "pos_app"
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
    } else {
        console.log("✅ Database connected!");
    }
});

module.exports = db;
