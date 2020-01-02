const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../../Models/UserModel.js')
const router = express.Router();

router.post('/auth/login', async (req, res) => {
  try {
    let loginData = req.body
    let { username, email, password } = await User.findOne({ email: loginData.email })
    if(loginData.password != password)
      return res.status(200).json({ message: "Wrong password" });

    jwt.sign({ username,email },'secret',{},function(err, token){
      if (err) res.status(500).json({ message:"Error getting token", err });
      else res.status(200).json({ token });
    })
  } catch (error) {
    res.status(500).json(error)
  }
  
    
});

router.get('/auth/user', async (req, res) => {
  let token = req.headers.authorization || ''
  jwt.verify(token,'secret', function(err, userInfoToken) {
    if (err) res.status(500).json({ message:"Error al generar el token", err });
    else res.status(200).json({ userInfoToken });
  });
});

router.post('/auth/logout', async (req, res) => {

});


module.exports = router;