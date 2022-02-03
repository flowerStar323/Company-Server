const express = require('express');
const router = express.Router();
const UserCtr = require('../controller/UserCtr');

//user login
router.post('/signup', UserCtr.SignupUser);
router.post('/login', UserCtr.loginUser);
router.post('/checkcode', UserCtr.checkcode);

module.exports = router;