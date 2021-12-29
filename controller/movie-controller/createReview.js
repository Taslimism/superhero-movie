const REVIEW_RATING = {};
const { Marvel_Movie, DC_Movie } = require('./../../model/movie-model');
const User = require('./../../model/user-model');
const createReview = async (req, res, next) => {
    const id = req.params.id;
    const uid = req.params.uid;

    let name = '';
    let userId;
    try {
        const user = await User.find({ _id: uid });
        const userID = await User.find().select('_id');
        userId = userID.map(id => id._id.toString());
        // console.log(user[0].name);
        name = user[0].name;
    } catch (err) {
        console.log(err);
    }

    const review = req.body.review;
    const rating = req.body.rating;
    REVIEW_RATING[uid] = { name: name, review: review, rating: rating, time: Date.now() }

    try {
        let movie = await DC_Movie.findByIdAndUpdate(id,
            { reviews: REVIEW_RATING },
            { new: true })

        if (!movie) {
            movie = await Marvel_Movie.findByIdAndUpdate(id,
                { reviews: REVIEW_RATING },
                { new: true })
        }

        // console.log(movie);
        // console.log(name);
        // reviews = data.data[0];
        // userIds = data.data[1];
        const REVIEWS = [];

        userId.forEach(id => {
            if (movie.reviews[0][id.toString()])
                REVIEWS.push(movie.reviews[0][id.toString()]);
        })
        // console.log(REVIEWS);

        res.status(200).json({
            status: 'success',
            data: [
                // movie.reviews,
                // userId
                REVIEWS
            ]
        })
    } catch (err) {
        console.log(err);
    }

}

module.exports = createReview;