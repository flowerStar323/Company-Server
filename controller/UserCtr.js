const config = require("../config");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
exports.getUser = (req, res) => {
    UserModel.find().then(e => res.json(e)).catch(er => console.log(er));
}

exports.loginUser = (req, res) => {
    UserModel
        .findOne({ email: req.body.email, password: req.body.pass })
        .then(record => {
            if (record) return res.json(record);
            else return res.status(400).json('User infor wrong');
        })
        .catch(err => console.log(err));
}
exports.SignupUser = async (req, res) => {
    let avatar;
    avatar = req.files.avatar;
    let uniqNum = Date.now();
    const avatarname = `${config.dirName}/upload/` + uniqNum + `.jpg`;
    await avatar.mv(`${avatarname}`, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
    new UserModel({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        refercode: req.body.refercode,
        title: req.body.title,
        linkedinURL: req.body.linkedinURL,
        aboutme: req.body.aboutme,
        avatar: "http://localhost:3230/upload/" + `${uniqNum}.jpg`,
    }).save()
        .then((e) => res.json(e)).catch(err => console.log(err));
}
exports.checkcode = (req, res) => {
    UserModel
        .findOne({ refercode: req.body.code })
        .then(record => {
            if (record) return res.json(false);
            else return res.json(true);
        })
        .catch(err => console.log(err));
}