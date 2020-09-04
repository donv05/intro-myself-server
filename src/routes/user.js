const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const bcrypt = require('bcryptjs');
const auth = require('../db/middleware/auth')

const multer  = require('multer')
var upload = multer({ dest: 'uploads/' , limits: { fieldSize: 1 * 1024 * 1024 }})

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })


// Task resource- REST API 
// Create POST/tasks
// Read GET/tasks
// Read GET/tasks/:id
// Update PATCH/tasks/:id
// Delete DELETE/tasks/:id

// Define the user route

// Use promise 
// router.post('/', (req, res) => {
//     const user = new User(req.body)
//     user.save().then(() => {
//         res.json(user)
//     }).catch((err) => {
//         res.status(500).json(err)
//     })
// })

// Use Async Await 
router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const isMatchEmail = await User.findOne({email})
        if(isMatchEmail) {
            res.status(201).send({error: 'Email used!'})
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 8)
            const user = new User(req.body)
            user.tokens = await user.generateAuthToken()
            await user.save()
            res.status(201).send(user)
        }
    } catch (error) {
        res.status(500).json(error)
    }

})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log(user)
        const token = await user.generateAuthToken()
        const userInf = await user.getPublicInformation()
        res.status(201).send({user: userInf, token})
    } catch (error) {
        res.status(404).json({code: 404,  message: 'Login failure', error: error})
    }

})

router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.status(201).send({code: 200, data: true})
    } catch (error) {
        res.status(500).json(error)
    }

})

router.get('/', auth, async (req, res) => {
    try {
        const data = req.user
        if (!data) {
            res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const data = await User.find({ _id: _id })
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.put('/:id', upload.single('avatar'), async (req, res) => {
    const _id = req.params.id
    try {
        const options = {
            new: true,
            runValidators: true,
        }
        const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, options)
        if (!data) {
            return res.status(404).json(err)
        }
        const userInf = await data.getPublicInformation()
        res.status(201).send({user: userInf})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.patch('/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }
    try {
        const options = {
            new: true,
            runValidators: true,
        }
        const data = await User.findOneAndUpdate({ _id: _id }, req.body, options)
        if (!data) {
            res.status(201).send({ error: 'Update failed!' })
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/', auth, async (req, res) => {
    try {
        await req.user.delete()
        res.status(201).send({code: 200, data: true, message: 'Deleted record'})
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router