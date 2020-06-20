const cors = require('cors')
const express = require('express');
const app = express()
require('./db/mongoose')
const user = require('./routes/user')
const task = require('./routes/task')
const skill = require('./routes/skill')
const project = require('./routes/project')
const token = require('./routes/token')
const bodyParser = require('body-parser')
const cors = require('cors')

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/users', user)
app.use('/tasks', task)
app.use('/skills', skill)
app.use('/project', project)
app.use('/auth', token)
app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${process.env.PORT}`))







// const main = async () => {
//     // const task = await Task.findById('5ecf59edb350eb23e838f4ec')
//     // await task.populate('owner').execPopulate()
//     // console.log(task)
//     // User.find({}).populate({ path: 'task', select: '_id owner' }).exec(function(error, bands) {
// //     const  u = await User.findById('5ecdbd1ce849e06f2c98e9f0')
// //    await u.populate('tasks').execPopulate();
// //    console.log(u.tasks)
// //     User.findById('5ecdbd1ce849e06f2c98e9f0').populate({ path: 'tasks', select: '_id owner' }).exec(function(error, bands) {
// //        console.log(bands.tasks)
// //    })
// } 
// main()