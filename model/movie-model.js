const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const axios = require('axios');

// dotenv.config({ path: './../config.env' })

// const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// mongoose.connect(DB).then(console.log('Connected to database'));

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release: {
        type: Date,
    },
    thumbnail: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    reviews: []
})

const Marvel_Movie = mongoose.model('Marvel_Movie', moviesSchema);
const DC_Movie = mongoose.model('DC_Movie', moviesSchema);

moviesSchema.index({ title: 'text' });

const saveMovies = async () => {
    const API_URL = `https://api.themoviedb.org/4/list/1?page=2&api_key=${process.env.API_KEY}`;

    const { data } = await axios(API_URL);

    const MARVEL_LIST = data.results.map(movie => {
        return {
            title: movie["original_title"],
            release: movie["release_date"],
            thumbnail: `${process.env.POSTER_PATH}${movie["backdrop_path"]}`,
            poster: `${process.env.POSTER_PATH}${movie["backdrop_path"]}`,
            overview: movie["overview"]
        }
    })

    MARVEL_LIST.map(movie => {
        const movies = new Marvel_Movie(movie);
        movies.save().then(console.log("saved")).catch(err => console.log(err))
    })

}

module.exports.DC_Movie = DC_Movie;
module.exports.Marvel_Movie = Marvel_Movie;