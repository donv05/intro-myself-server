const mongoose = require('mongoose');

const Skill = mongoose.model('Skills', {
    skillName: {
        type: String,
        trim: true,
        required: [true, `Descripttion's required`],
    },
    level: {
        type: Number,
        trim: true,
        required: [true, `Descripttion's required`],
    },
    experience: {
        type: String,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    }
});

module.exports = Skill