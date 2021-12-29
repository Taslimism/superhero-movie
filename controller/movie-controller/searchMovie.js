const { Marvel_Movie, DC_Movie } = require('./../../model/movie-model');

const searchMovie = async (req, res, next) => {
    let searchText = req.body.search;

    try {
        let movie = await DC_Movie.find({ $text: { $search: searchText } });
        // let movie = await DC_Movie.find({ title: { $regex: searchText } })
        // console.log(movie);
        // console.log(movie);
        if (movie.length === 0) {
            movie = await Marvel_Movie.find({ $text: { $search: searchText } });
        }

        res.status(200).json({
            "status": 'success',
            movie
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = searchMovie;