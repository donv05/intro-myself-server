var express = require('express')
var router = express.Router()
const Role = require('../db/models/role')
const auth = require('../db/middleware/auth')

// Define the user route
router.post('/',  async (req, res) => {
    const role = new Role({
        ...req.body
    })
    try {
        const data = await role.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Role.find({})
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
        const data = await Role.findById({ _id })
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    const role = new Role(req.body)
    try {
        const data = await role.save()
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
        const data = await Role.findOneAndUpdate({ _id: _id }, req.body, options)
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
        const data = await Role.findOneAndDelete({ _id: _id })
        if (!data) {
            return res.status(404).json(err)
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router