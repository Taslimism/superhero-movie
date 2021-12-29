const { Marvel_Movie, DC_Movie } = require('./../../model/movie-model');

const getAMovie = async (req, res, next) => {
    const id = req.params.id;


    try {
        let movie = await DC_Movie.find({ _id: id });
        // console.log(movie)
        if (movie.length === 0) {
            movie = await Marvel_Movie.find({ _id: id })
        }
        res.status(200).json({
            status: 'success',
            data: { movie }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = getAMovie;