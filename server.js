const app = require('./app')


const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    }
})

const User = mongoose.model('User', userSchema);

const user1 = new User({
    name: "Taslim Raza Ansari",
    email: "test@est.com",
    password: "khahk756"
})
const user2 = new User({
    name: "Tekken",
    email: "test@est.com",
    password: "khahk756"
})

// user2.save().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })



