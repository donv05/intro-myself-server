// // ES6/ES2015

// ///////////////////////////////////////////////////////////////
// // Lecture: Variable declarations with let and const 
// // ES5
// var name5 = 'Jane Smith'
// var age5 = 23
// name = 'jane Miller'

// console.log(name)



// // ES6 
// const name6 = 'Jane Smith'
// let age6 = 23
// // name6 = 'Jane Miller'
// console.log(name6)


// // ES5
// // Function-scoped  
// function driversLicence5(passedTest) {
//     // Block-scoped
//     if(passedTest) {
//         var firstname = 'join'
//         var yearOfBirth = 1990
//         // console.log(firstname + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
//     }
//     console.log(firstname + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
// }

// driversLicence5(true)
// // ES6
// // Function-scoped   
// function driversLicence6(passedTest) {
//     // Block-scoped
//     if(passedTest) {
//         let firstname = 'join'
//         const yearOfBirth = 1990
//         // console.log(firstname + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
//     }
//     // console.log(firstname + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.') // throw error refer
// }

// driversLicence6(true)
// // Variable Var is function scope, they declare in function scope  , Variable Var is Hoisting
// // with let and const, the variables are not function-scoped but block-scoped.
// // which is strange, right?  But that's because, with let and const, the variables are not function-scoped but block-scoped.

// // A block is simply all the code that is wrapped between these curly braces here.
// // So each time that we have an if statement or a for block or a while block, we're actually creating a new block,
// // with let and const are only valid, are only accessible, by the code that are inside of the same block.
// // So if we move outside of the block, which is what we did here, then we no longer have access to these variables that are here.


// // let iES6 = 23
// // for (let iES6 = 0; iES6 < 4; iES6++) {
// //     console.log(iES6) 
// // }
// // console.log('ES6',iES6) 

// // var jES5 = 23
// // for (var jES5 = 0; jES5 < 4; jES5++) {
// //     console.log(jES5) 
// // }
// // console.log('ES5',jES5) 

// ///////////////////////////////////////////////////////////////
// // Lecture : Blocks and IIFES
// // {
// //     const a = 1
// //     let b = 2
// //     var c = 3
// // }
// // console.log(a + b, c)

// // // ES5 
// // (function() {
// //     var c = 3;
// // })();
// // console.log(c)
// // //  -> They're block-scoped and not function-scoped.


// ////////////////////////////////////////
// // Lecture : Strings

// // let firstName = 'Join'
// // let lastName = 'Smith'
// // const yearOfBirth = 1990

// // function calcAge(year) {
// //     return 2020 - year
// // }

// // // ES5 
// // console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + '' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' year old.')

// // // ES6 
// // // To use a template literal. 
// // console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} year old.`)
// // console.log(`${firstName}`.repeat(5))
// // const n = `${firstName} ${lastName}` 
// // console.log(n.startsWith('j'))


////////////////////////////////////////
// Lecture : Arrow functions
// const years = [1990, 1965, 1982, 1937]

// // ES5
// var age5Arrow = years.map(function(el){
//     return 2016 - el
// })
// console.log(age5Arrow)

// // ES6
// let age6Arrow = years.map((el)=> 2016 - el)
// console.log(age6Arrow)

// // This key word

// //ES5
// // var box5 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: function () {
// //         console.log('clickMe', this)
// //         let seft = this
// //         // document.getElementById("input-wrap").addEventListener("click",function () {
// //         //     console.log(seft.color)
// //         //     // console.log(this.color) // Error
// //         // });
// //     }
// // }
// // box5.clickMe()
// // ES6
// // var box5 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: function () {
// //         console.log('clickMe', this)
// //         document.getElementById("input-wrap").addEventListener("click", () => {
// //             console.log(this.color)
// //         });
// //     }
// // }

// // var box5 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: function () {
// //         // let seft = this
// //         console.log('clickMe', this.color)
// //         this.color =  'red',
// //         console.log('clickMe', this.color)
// //         function a() {
// //             console.log('Sub', this.color);
// //         }
// //         a()
// //     }
// // }
// // // box5.clickMe()
// // var newBox = new box5.clickMe()


// function Person(name) {
//     this.name = name
//     this.arr = []
// }

// Person.prototype.myFriends5 = function (friends) {  
//     // Since the following code is not in strict mode, and because the value of this is not set by the call,
//     //  this will default to the global object, which is window in a browser.

//     // var arr = friends.map(function(el) {
//     //     return this.name + ' is friends witth' + el
//     // })
//     // use bind method
//     // var arr = friends.map(function(el) {
//     //     return this.name + ' is friends witth' + el
//     // }.bind(this))
//     // console.log(arr)

//     this.arr = friends
//     var arr = this.arr.map(function(el) {
//         return this.name + ' is friends witth' + el
//     })
//     console.log(arr)
// }
// var myFriends5 = ['Bob', 'Jane', 'Mark']
// new Person('Join').myFriends5(myFriends5)


////////////////////////////////////////
// Lecture : Destructuring

// ES5
// var join = ['john', 26]
// var name = join[0]
// var age = join[1]
// console.log(name, age)
// ES6

// const [name, age] = ['john', 26]
// console.log(name, age)
// const obj = {
//     firstName: 'john',
//     lastName: 'Smith'
// }
// const {firstName, lastName} = obj
// const {firstName: a, lastName: b} = obj
// console.log(firstName, lastName)
// console.log(a, b)

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() -year;
//     return [age, 65-age]
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age, retirement)

////////////////////////////////////////
// Lecture : Spread operator

// // ES5 
// function  addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// var sumArr = [1, 2, 3, 4]
// var sum5 = addFourAges.apply(null, sumArr)
// console.log(sum5)

// // ES6 
// let sum6 = addFourAges(...sumArr);
// console.log(sum6)
// // --> Its more easy to write more easy to read and also to memorize So instead of using this apply and null

// const spreadFamilySmith = ['join', 'Jane', 'Mark']
// const spreadFamilyMiller = ['Marry', 'Bob', 'Ann']
// const bigFamily = [...spreadFamilySmith, 'Lily', ...spreadFamilyMiller]
// console.log(bigFamily)

// ////////////////////////////////////////
// // Lecture : Rest Parameters
// // ->Rest parameter allow us to pass arbitrary number of arguments into a function.
// // and to use these argument in that function

// // ES5
// function isFullAges5() {
//     // arguments is params [Arguments] { '0': 1990, '1': 1999, '2': 1965 }
//     console.log(arguments)
//     var arr = Array.prototype.slice.call(arguments); // return [ 1990, 1999, 1965 ]
//     console.log(arr)
// }

// isFullAges5(1990, 1999, 1965)

// // ES6
// function isFullAges6(...years) {
//     console.log(years)
// }
// isFullAges6(1990, 1999, 1965)


// ////////////////////////////////////////
// // Lecture : Default Parameters

// // ES5
// function SmithPerson5 (firstName, yearofBirth, lastName, nationlity) {
//     // =>  lastName === undefined nationlity == undefined we check undefined value if it is'nt exist.
//     this.lastName = lastName ? lastName: 'Join'
//     this.firstName = firstName
//     this.yearofBirth = yearofBirth
//     this.nationlity = nationlity? nationlity: 'American'
// }

// var join5 = new SmithPerson5('Join', 1990) // =>  lastName === undefined nationlity == undefined
// console.log(join5)
// // ES6 
//  // =>  lastName === undefined nationlity == undefined we check undefined value if it is'nt exist.
// function SmithPerson6 (firstName, yearofBirth, lastName= 'Join', nationlity= 'American') {
//     this.lastName = lastName
//     this.firstName = firstName
//     this.yearofBirth = yearofBirth
//     this.nationlity = nationlity
// }

// var join6 = new SmithPerson6('Join', 1990) // =>  lastName === undefined nationlity == undefined
// console.log(join6)

// ////////////////////////////////////////
// // Lecture : Maps
// // a map is a new key-value data structure in ES6 and one of the big differences is that in maps
// // we can use anything for the keys.
// // So in object we are limited to strings,

// const question = new Map()
// question.set('quesion', 'what is the offical nam of the latest major javascript version')
// question.set(1, 'ES5')
// question.set(2, 'ES6')
// question.set(3, 'ES20')
// question.set(4, 'ES7')
// question.set('correct', 3)
// question.set(true, 'Correct answer :D')
// question.set(false, 'Wrong, please try again!')
// question.set(4, 'Reduplicate ES7')
// console.log(question.get('Correct'))
// // console.log(question.delete(4))

// for (const [key, value] of question.entries()) {
//     if(typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// console.log(`Size ${question.size}`, question)



// ////////////////////////////////////////
// // Lecture : Class

// // ES5 
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }

// var join5 = new Person5('Join', 1990, 'teacher')
// console.log(join5)
// // ES6
// class Person6 { 
//     constructor(name, yearOfBirth, job) {
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }
//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth
//         console.log(age)
//     }
// }

// const join6 = new Person5('Join6', 1990, 'teacher')
// console.log(join6)

// ////////////////////////////////////////
// // Lecture : Classes with Subclasses

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     this.getFullYear = function() {
//         console.log('getFullYear')
//     }
// }
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }

// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job)
//     this.olymicGames = olymicGames
//     this.medals = medals
// }
// Athlete5.prototype.wonMedal = function() { //Error that's because it actually has to be after we connect these two function constructors
//     this.medals ++;
//     console.log(this.medals)
// }

// Athlete5.prototype = Object.create(Person5.prototype) // If they don't call Object.create then Athlete5 don't extend inheritance from Person5. it's only getting the property of Person5(this.name, this.yearOfBirth )
// // Object.create() allows us to manually set the prototype of an object 
// // and we want the prototype of the athlete to be the prototype of the person, so that they become connected.

// // Athlete5.prototype.wonMedal = function() { //not error. Fixed
// //     this.medals ++;
// //     console.log(this.medals)
// // }

// var join5 =  new Athlete5('Join', 1990, 'Swimmer', 3, 10)
// console.log(join5)
// join5.wonMedal()
// // ES6
// class Person6 { 
//     constructor(name, yearOfBirth, job) {
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }
//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth
//         console.log(age)
//     }
// }


// class Athlete6 extends Person6 { 
//     constructor(name, yearOfBirth, job, olymicGames, medals) {
//         super(name, yearOfBirth, job)
//         this.olymicGames = olymicGames
//         this.medals = medals
//     }
//     wonMedal() {
//         this.medals ++;
//         console.log( this.medals)
//     }
// }


// const join6 = new Athlete6('Join', 1990, 'Swimmer', 3, 10)
// console.log(join6)
// join6.wonMedal()




///////////////////////////////////////////////////////////////////////
// Lecture: Asynchronous JavaScript: Promises, Async/Await and AJAX
// AJAX -> ASYNCHRONOUS JAVASCRIPT AND XML: we want the app to get some data from our server.But of course, without having to reload the entire page.
// Well, with AJAX we can do a simple get HTTP request, to our server, which will then send back a response containing the data that we requested.
// And this all happens asynchronously in the background

// API STANDS FOR APPLICATION PROGRAMMING INTERFACE AND ON A VERY HIGH LEVEL. it's basically a piece of software that can be used by another piece of software
// in order to basically allow applications
// the API is not the server itself but it's like a part of the server.
// Like an application that receives requests and sends back responses.