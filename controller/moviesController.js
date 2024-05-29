const MovieList = require("../models/MovieList");

exports.addMovieList = async (req, res) => {
  const { name, movies, isPublic } = req.body;
  console.log(req.body);

  try {
    const newList = new MovieList({
      user: req.user.id,
      name,
      movies,
      isPublic,
    });

    const list = await newList.save();
    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getMovieLists = async (req, res) => {
  try {
    const lists = await MovieList.find({ user: req.user.id });
    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
