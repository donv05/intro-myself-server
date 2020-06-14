// simple Callback
const doWorkCallBack = (callback) => {
    const timeout = 2000;
    setTimeout(() => {
        callback(undefined, [1, 2, 3])
    }, timeout);
}

doWorkCallBack((error, res) => {
    if(error){
        return console.log(error)
    }
    console.log(res)
})

// promise

const doWorkPromise = new Promise((resolve, reject) => {
    const timeout = 2000
    setTimeout(() => {
        // resolve([1, 2, 7])
        reject('Things went Wrong')
    }, timeout);
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch( (error) => {
    console.log(error)
})