const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'task-manager';

// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true}, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // Insert record
    // db.collection('users').insertOne({
    //     name: 'Learn Mongo',
    //     age: 1,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Learn ReactJS',
    //     age: 1,
    //     description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
    //     completed: false,
    // },
    // {
    //     name: 'Learn AngularJS',
    //     age: 1,
    //     description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
    //     completed: false,

    // },
    // {
    //     name: 'Learn CSS3/HTML5',
    //     age: 1,
    //     description: 'Design User Interface!',
    //     completed: false,
    // }], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User')
    //     }
    //     console.log(result.ops)
    // })

    // Query 
    // db.collection('users').findOne({name : 'Learn Mongo'}, (err, user) => {
    //     if(err) {
    //         return console.log('Unable to insert User');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({age : 1}).toArray((err, user) => {
    //     if(err) {
    //         return console.log('Unable to insert User');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find().toArray((err, user) => {
    //     if(err) {
    //         return console.log('Unable to insert User');
    //     }
    //     console.log(user);
    // })
    // findOne  to fetch the last user by its id
    db.collection('users').findOne({ _id : new ObjectID("5ec5ddc02c13cb56b4e71824")}, (err, user) => {
        if(err) {
            return console.log('Unable to insert User');
        }
        console.log(user);
    })
});
