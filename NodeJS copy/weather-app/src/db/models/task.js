const mongoose = require('mongoose');

const Task = mongoose.model('Tasks', {
    descripttion: {
        type: String,
        trim: true,
        required: [true, `Descripttion's required`],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    }
});

module.exports = Task