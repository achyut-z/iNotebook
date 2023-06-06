const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWT_SECRET_KEY = "thisismyprivatejwtkey"

//Create a user using: POST "/api/auth/create-user" //No login required
router.post('/create-user', [
    body('name', 'Name must be atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {

    //checking for errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {

        //check whether the user with email exists
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.json({ error: "Sorry, a user with this email already exists" })
        }

        //adding salt to hash the password
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        //create user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        });

        //payload for the jwt token
        const data = {
            user: user.id,
        }

        //creating jwt token for the user signing up
        const jwtToken = jwt.sign(data, JWT_SECRET_KEY)
        res.json({authToken:jwtToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//Authenticate the user: POST /api/auth/login //No login required
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {

    //checking for errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data,JWT_SECRET_KEY);
        res.json({authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router