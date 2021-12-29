const jwt = require('jsonwebtoken');

const authController = async (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(' ')[1];


    if (!token) return res.status(400).json({
        status: "fail",
        data: {
            message: "Could not verify user"
        }
    })

    let isVerified;
    try {
        isVerified = await jwt.verify(token, process.env.MY_SUPER_SECRET_KEY);
    } catch (err) {
        return res.status(401).json({
            status: 'fail',
            data: {
                message: 'Could not verify user'
            }
        })
    }

    // if (!isVerified || isVerified === null) {
    //     return res.status(401).json({
    //         status: 'fail',
    //         data: {
    //             message: 'Could not verify user'
    //         }
    //     })
    // } 

    next();


}

module.exports = authController;