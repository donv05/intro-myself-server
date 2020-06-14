const fs = require('fs');
const chalk = require('chalk')
const getNotes = function(messages) {
    return messages;
}

const addNote = (title, body) => {
    debugger
    const notes = loadNotes();
    const duplicateNote = notes.length > 0 ? notes.find((note)=> note.title === title) : false;
    debugger
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added @@'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.txt');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    }catch (e) {
        return []
    }
}
const saveNotes = (data) => {
    fs.writeFileSync('notes.txt', JSON.stringify(data));
    
}
const showList = function() {
    const dataBuffer = fs.readFileSync('notes.txt');
    return JSON.parse(dataBuffer); 
}
module.exports = {
    addNote,
    showList
};


