const { Marvel_Movie, DC_Movie } = require('./../../model/movie-model');
const User = require('./../../model/user-model');
const getReview = async (req, res, next) => {
    const id = req.params.id;
    let reviewsFromDB;

    let userId;
    try {
        const userID = await User.find().select('_id');
        userId = userID.map(id => id._id.toString());
    } catch (err) {
        console.log(err);
    }

    try {
        reviewsFromDB = await DC_Movie.find({ _id: id }).select('reviews');
        if (reviewsFromDB.length === 0) {
            reviewsFromDB = await Marvel_Movie.find({ _id: id }).select('reviews');
        }
        // console.log(reviewsFromDB[0].reviews[0]['61ac10f0fcd325b1299e7535']);
        const REVIEWS = [];

        if (reviewsFromDB[0].reviews[0]) {
            userId.forEach(id => {
                if (reviewsFromDB[0].reviews[0][id.toString()])
                    REVIEWS.push(reviewsFromDB[0].reviews[0][id.toString()]);
            })
        }
        // console.log(REVIEWS);


        res.status(200).json([
            REVIEWS
        ])

    } catch (err) {
        console.log(err);
    }
}

module.exports = getReview;