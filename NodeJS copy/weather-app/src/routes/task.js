var express = require('express')
var router = express.Router()
const Task = require('../db/models/task')
const auth = require('../db/middleware/auth')
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// Define the user route
router.post('/', auth,  async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        const data = await task.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/', async (req, res) => {
    // Task.find({}).then((data) => {
    //     if(!data) {
    //         res.status(404).json(err)
    //     }
    //     res.send(data)
    // }).catch((err) => {
    //     res.status(500).json(err)
    // })
    try {
        const data = await Task.find({})
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Task.findById({ _id })
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    const task = new Task(req.body)
    try {
        const data = await task.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }

})

router.patch('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const options = {
            new: true,
            runValidators: true,
        }
        const data = await Task.findOneAndUpdate({ _id: _id }, req.body, options)
        if (!data) {
            return res.status(404).json({ error: 'update failed!' })
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }

})

router.delete('/:id',auth,  async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Task.findOneAndDelete({ _id: _id })
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router