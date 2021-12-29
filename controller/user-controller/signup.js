const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../../model/user-model');

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let USER_OBJECT;

    //TODO - Redirect to login page
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        return res.status(400).json({
            status: 'fail',
            data: {
                message: 'User already exists'
            }
        })
    }

    if (!name || !email || !password) {
        return res.status(400).json({
            status: "fail",
            data: {
                message: 'Please fill in all the fields'
            }
        })
    } else {
        let hash;
        try {
            hash = await bcrypt.hash(password, 12);
            USER_OBJECT = new User({ name, email, password: hash });
        } catch (err) {
            console.log(err);
        }

    }

    let USER;
    try {
        USER = await USER_OBJECT.save();
    } catch (err) {
        console.log(err);
    }

    let token;
    try {
        token = await jwt.sign({ data: USER.email }, process.env.MY_SUPER_SECRET_KEY, { expiresIn: '1h' });
    } catch (err) {
        console.log(err);
    }

    res.status(201).json({
        status: 'success',
        data: {
            ...USER,
            token
        }
    })

}

module.exports = signup;