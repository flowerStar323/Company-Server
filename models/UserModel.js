const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    refercode: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    linkedinURL: {
        type: String,
        required: true,
        trim: true,
    },
    aboutme: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
        default: 'user'
    }
},
    { collection: "users" }
);

module.exports = mongoose.model('users', User);


