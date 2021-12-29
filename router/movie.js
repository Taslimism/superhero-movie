const express = require('express');
const router = express.Router();


const authController = require('./../auth/authController')

const getAllMovies = require('./../controller/movie-controller/getAllMovie');
const getAMovie = require('./../controller/movie-controller/getAMovie');
const getReview = require('./../controller/movie-controller/getAReview');
const searchMovie = require('./../controller/movie-controller/searchMovie')
const createReview = require('./../controller/movie-controller/createReview')

router.get('/', getAllMovies);
router.get('/:id', getAMovie)
router.get('/reviews/:id', getReview)
router.post('/search', searchMovie)

router.post('/:id/review/:uid', authController, createReview)

module.exports = router;