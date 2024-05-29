const express = require("express");
const {
  addMovieList,
  getMovieLists,
} = require("../controller/moviesController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/add", auth, addMovieList);
router.get("/", auth, getMovieLists);

module.exports = router;
