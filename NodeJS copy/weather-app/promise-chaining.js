require('./src/db/mongoose')
const Task = require('./src/db/models/task.js')


// use Promise
// Task.findByIdAndDelete('5ec63776eeb9b0457c8534a5').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then(result => {
//     console.log('then', result)
// }).catch( err => {
//     console.log(err)
// })

// Goal: use async/await
// 1 Create delete Tast count as an async function
//     - Accept id of task to remove
// 2 Use await tpo delete task and count up incomplete tasks
// 3 Return the count
// 4 Call the function and attach then/catch to log results 
// 5 Test your work!

const deleteAndCountTask = async (_id) => {
    const task = await Task.findByIdAndDelete(_id)
    const countDocuments = await Task.countDocuments({completed: false})
    return countDocuments
}

deleteAndCountTask('5ecb2e049e0c675e00bf0056').then(result =>  {
    console.log(result)
}).catch(err => {
    console.log(err)
})