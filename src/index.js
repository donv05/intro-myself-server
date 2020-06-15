const express = require('express');
const app = express()
// const path = require('path');
require('./db/mongoose')
const user = require('./routes/user')
const task = require('./routes/task')
const skill = require('./routes/skill')
const token = require('./routes/token')
// const bodyParser = require('body-parser')
// const Task = require('./db/models/task')
// const User = require('./db/models/user')

// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/json
// app.use(bodyParser.json())
app.use(express.json())
app.use('/users', user)
app.use('/tasks', task)
app.use('/skills', skill)
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