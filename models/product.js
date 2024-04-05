const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Title: { type: String, required: false },
  Year: { type: String, required: false },
  Rated: { type: String, default: "PG-13" },
  Runtime: { type: String, default: "101 min" },
  Genre: { type: [String], default: ["Drama", "Horror", "Sci-Fi"] },
  Writer: { type: String, required: false },
  Actors: { type: [String], required: false },
  plot: { type: String, required: false },
  Language: { type: String, default: "English" },
  Country: { type: String, default: "USA" },
  Awards: { type: String, default: "9 wins & 21 nominations." },
  imdbRating: { type: String, default: 7.2 },
  imdbVotes: { type: String, default: "533,874" },
  imdbID: { type: String, required: false },
  Type: { type: String, default: "movie" },
  Images: { type: [String], default: [] }, // Array of image URLs
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Product", productSchema);
