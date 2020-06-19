var express = require('express')
var router = express.Router()
const auth = require('../db/middleware/auth')
const Project = require('../db/models/project')

router.get('/',auth,  async (req, res) => {
    try {
        const project = await Project.find({})
        res.status(201).send({data: project})
    } catch (error) {
        res.status(500).json(error)
    }
    
})

router.post('/',auth,  async (req, res) => {
    try {
        const project = new Project(req.body)
        await project.save()
        res.status(201).send({code: 200, messages: 'Record created successful'})
    } catch (error) {
        res.status(500).json(error)
    }
    
})

// router.put('/:id',auth,  async (req, res) => {
//     const _id = req.params.id
//     const updates = Object.keys(req.body)
//     const allowUpdates = ['experience', 'skillName', 'level']
//     const isValidOperation = updates.every((update) => allowUpdates.includes(update))
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid Updates!' })
//     }
//     try {
//         const options = {
//             new: true,
//             runValidators: true,
//         }
//         const data = await Skill.findOneAndUpdate({ _id: _id }, req.body, options)
//         if (!data) {
//             res.status(201).send({ error: 'Update failed!' })
//         }
//         res.status(201).send(data)
//     } catch (error) {
//         res.status(500).json(error)
//     }
    
// })

module.exports = router