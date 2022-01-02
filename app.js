const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const path = require('path');

const movie = require('./router/movie');
const user = require('./router/user')

dotenv.config({ path: './config.env' })

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const DATABASE = DB.replace('<COLLECTION>', 'moviedb-test');


const connection = mongoose.connect(DATABASE).then(() => console.log('Connected to Database')).catch((err) => {
    console.log(err);
});

app.use(express.static('static'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

app.use(express.json());

app.use('/api/movies', movie);
app.use('/user', user);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})