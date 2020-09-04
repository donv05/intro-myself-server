const cors = require('cors')
const express = require('express');
const app = express()
require('./db/mongoose')

const user = require('./routes/user')
const task = require('./routes/task')
const skill = require('./routes/skill')
const project = require('./routes/project')
const role = require('./routes/role')
const token = require('./routes/token')

const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/users', user)
app.use('/tasks', task)
app.use('/skills', skill)
app.use('/project', project)
app.use('/roles', role)
app.use('/auth', token)
app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${process.env.PORT}`))
