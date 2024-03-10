const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json('The test is working');
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //check if name was entered...
        if(!name) {
            return res.json({
                error: 'Name is a required field!'
            })
        };
        //check if password is good
        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required, and it must be atleast 6 characters!'
            })
        };
        //check email
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'This email address already exists!!!'
            })
        }

        const hashedPassword = await hashPassword(password)

        //create a new user in database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}
//Register Endpoint

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check if user exixts...
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'User not found!'
            })
        };

        //check if password matches
        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }

        if(!match) {
            res.json({
                error: 'Invalid Password! Passwords do not match!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
//Login Endpoint

const getProfile = (req, res) => {
    const {token} = req.cookies

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser, 
    loginUser,
    getProfile
};