const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MovieDB");

const movieSchema = new mongoose.Schema({
  title: "string",
  release_year: "number",
  genre: "string",
  director: "string",
  actors: ["string"],
});
module.exports = mongoose.model("movie", movieSchema);

const directorsSchema = new mongoose.Schema({
  name: "string",
  nationality: "string",
  movies_directed: ["string"],
});
module.exports = mongoose.model("directors", directorsSchema);

const actorsSchema = new mongoose.Schema({
  name: "string",
  nationality: "string",
  movies_acted_in: ["string"],
});
module.exports = mongoose.model("actors", actorsSchema);
