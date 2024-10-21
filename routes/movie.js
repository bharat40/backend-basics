// setting up an Express router.
const express = require("express");
const router = express.Router()
const movieHandler = require("../controllers/movie")

router.get("/", movieHandler.getMovies)

module.exports = router