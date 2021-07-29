const express = require('express');
const router = express();
const User = require('../models/User');



router.post('/register', async (res, req) => {


    console.log(req);
    res.send(req.body.name);

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    });

    

    try {

        const saveUser = await user.save();
        res.send(saveUser);
    } catch (error) {
        res.status(300).send(error);
    }

});

module.exports = router;