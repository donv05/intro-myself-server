var express = require('express')
var router = express.Router()
const auth = require('../db/middleware/auth')
const jwt = require('jsonwebtoken');
const User = require('../db/models/user')
// Define the user route
router.post('/token', async (req, res) => {
    try {
        const  user = await User.findByToken(req.body.refresh_token)
        const token = jwt.sign({ _id: user._id.toString(), exp: Math.floor(Date.now() / 1000) + (60 * 15) }, 'thisismynewcourse');
        user.tokens = user.tokens.concat({ token })
        await user.save()
        res.status(201).send({token: token})
    } catch (error) {
        res.status(500).json(error)
    }
    
})


module.exports = router