// Sample async await 
// const doWork = async() => {
//     return "Async await"
//     throw new Error('Something is wrong!')
// }

// doWork().then((result) => {
//     console.log(result)
// }).catch(e=> {
//     console.log(e)
// })

// The Sample is using async to call promise.
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}

const doWork = async () => {
    console.log('Start add function')
    const sum = await add(1, 99)
    const sum1 = await add(1, sum)
    const sum2 = await add(1, sum1)
    console.log(sum2)
    console.log('end add function')
    return sum2
}

doWork().then((result) => {
    console.log('callback', result)
}).catch(e => {
    console.log(e)
})