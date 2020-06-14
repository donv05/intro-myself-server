const jwt = require('jsonwebtoken')
const User = require('../models/user')
const fs = require('fs')
const path = require("path");
const privateKey = fs.readFileSync(path.resolve(__dirname, "../../keys/private-key.json"));

'use strict';
const auth = async (req, res, next) => {
    try {
        const key = JSON.parse(privateKey.toString()); 
        const token = req.header('Authorization').replace('Bearer', '').trim()
        try {
            const decoded = jwt.verify(token, key.key)
            const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
            if(!user) {
                throw new Error()
            }
            req.user = user
            req.token = token
            next();
        } catch (err) {
            res.status(401).send({ error: err.message })
        }
    } catch (e) {
        res.status(401).send({code: 401, error: 'Please authenticate!'})
    }
}

module.exports = auth
