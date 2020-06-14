const add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b)
        }, 2000);
    })
}

// Example 1
// add(1, 2).then((sum) => {
//     console.log(sum)
//     add(sum, 3).then((sum1) => {
//         console.log(sum1)
//     }).catch((er) => {
//         console.log(er)
//     })
// }).catch((er) => {
//     console.log(er)
// })

// Now the problem with the above solution is similar to the problem we ran into when using the callback pattern without promises.
// The problem is that the more asynchronous tasks we try to perform the more nested and complex our code
// For example we're doing two asynchronous tasks so we're two levels deep nested if we were to add on
// a another asynchronous call it would get even more complex.
// We also have duplicate code for catching errors which is not ideal either.
// There's a better way to get it done using something called Promise chaining.
//  two solutions to use promise chaining things start off exactly the same.

// Example 2 -> New syntax for example 1
add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
}).catch((er) => {
    console.log(er)
})