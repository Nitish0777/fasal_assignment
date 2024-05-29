const cors = require("cors");
const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movies");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
