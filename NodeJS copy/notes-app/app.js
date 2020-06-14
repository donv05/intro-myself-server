// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Do')
const utils = require('./utils');
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')


// notes
// console.log(utils(1, 2));
// const me = chalk.green(notes('I will be going to Phu Quoc island'))
// console.log(me);
// const commnad = process.argv;

// Customize yargs versions.

yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption:  true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption:  true,
            type: 'string',
        }
    },
    handler: function (argv) {
        console.log('Title ' + argv.title);
        console.log('Body ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'list',
    describe: 'show list',
    handler: function () {
        console.log(notes.showList());
    }
})

yargs.command({
    command: 'read',
    describe: 'read list',
    handler: function () {
        console.log('Reading a note');
    }
})

yargs.parse();





