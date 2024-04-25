const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the Users model

// get all list of users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); // end of get all list of users


router.post('/register', async (req, res) => {

  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  })

  try{
    const user = await newUser.save();
    res.status(201).json(user);
  
  }catch(err){
    res.status(400).json({message: err.message});
  }

})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // check if password is correct

    if(user.password !== password){
      return res.status(400).json({message: 'Invalid credentials'});
    }

    // if all is well, return user details
    res.status(200).json({
      message: "login successful",
      user
    });

  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
})




module.exports = router;