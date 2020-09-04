const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Roles = mongoose.model('Roles', {
    // _id: { type: Schema.Types.ObjectId },
    name: {
        type: String,
        trim: true,
        required: [true, `Role's required`],
    },
    level: {
        type: Number,
        trim: true,
        required: [true, `Level's required`],
    }
    
});

module.exports = Roles