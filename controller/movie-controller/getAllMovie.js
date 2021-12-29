const { Marvel_Movie, DC_Movie } = require('./../../model/movie-model');

const getAllMovies = async (req, res, next) => {
    const DC = await DC_Movie.find();
    const MARVEL = await Marvel_Movie.find();
    try {
        res.status(200).json({
            status: 'success',
            results: DC.length + MARVEL.length,
            data: [
                ...DC, ...MARVEL
            ]
        });
    } catch (err) {
        console.log(error);
    }

}

module.exports = getAllMovies;