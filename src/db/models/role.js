const mongoose = require('mongoose');

const Role = mongoose.model('Roles', {
    name: {
        type: String,
        trim: true,
        required: [true, `Role's required`],
    }
});

module.exports = Role