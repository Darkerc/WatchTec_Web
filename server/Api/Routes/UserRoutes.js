const express = require('express');
const router = express.Router();
const User  = require('../../../Models/UserModel.js');

router.post('/user', async (req, res) => {
    try {
        let userData = req.body
        const new_user = new User(userData)
        await new_user.save()
        res.status(200).json({Operation: "success"})
    } catch (error) {
        if(error.code == 11000){
            res.status(200).json({
                Operation:"wrong",
                Message:"Duplicate field email already exist!",
                code:11000
            })
        }else{
            res.status(500).send(error)
        }
    }    
});

module.exports = router;