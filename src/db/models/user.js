const mongoose = require('mongoose');
const validatorData = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('../models/task')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Username's required`],
        trim: true
    },
    first_name: {
        type: String,
        required: [true, `First name's required`],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, `Last Name's required`],
        trim: true
    },
    address: {
        type: String
    },
    age: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: props => `${props.value} must be a number!`
        },
    },
    email: {
        type: String,
        required: [true, `Email's required`],
        lowercase: true,
        validate: {
            validator: function (value) {
                return validatorData.isEmail(value);
            },
            message: props => `${props} is not a valid Email!`
        },
    },
    password: {
        type: String,
        required: [true, `Password's required`],
        trim: true,
        validate: {
            validator: function (value) {
                return value.length > 6;
            },
            message: props => `Password is greateer than 6!`
        },
    },
    avatar: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
        }
    }],
    role_id: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Role'
    }]
});

userSchema.methods.generateAuthToken = async function () {
    const user = this
    // if (user.tokens.length === 0) {
        const token = jwt.sign({ _id: user._id.toString(), exp: Math.floor(Date.now() / 1000) + (60 * 15) }, 'thisismynewcourse');
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return token;
    // } else {
    //     return user.tokens[0].token
    // }

}

userSchema.methods.getPublicInformation = async function () {
    const user = this
    console.log(user)
    const userObject = user.toObject();
    delete userObject.password
    // delete userObject._id
    delete userObject.tokens
    return userObject;

}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login!')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error({ error: 'Invalid Password!' })
    }
    return user;
}

userSchema.statics.findByToken = async (token) => {
    const user = await User.findOne({"tokens.token": token} ) 
    if (!user) {
        throw new Error('Not match Data!')
    }
    return user;
}

userSchema.pre('save', async function () {
    const user = this
    // user.password = await bcrypt.hash(user.password, 8)
    console.log('Just before saving!')
});

userSchema.pre('findOneAndUpdate', { document: true, query: false }, () => console.log('Hello from pre save'));

userSchema.pre('remove', async function () {
    const user = this
    await Task.deleteMany({ owner: user._id })
});

userSchema.virtual('tasks', {
    ref: 'Tasks', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'owner', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
    // options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});

userSchema.virtual('skills', {
    ref: 'Skills', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'owner', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
    // options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});

const User = mongoose.model('User', userSchema);
module.exports = User

// const User = mongoose.model('users', {
//     name: {
//         type: String,
//         required: [true, `Username's required`],
//         trim: true
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate: {
//             validator: function (value) {
//                 return value > 0;
//             },
//             message: props => `${props.value} must be a number!`
//         },
//     },
//     email: {
//         type: String,
//         required: [true, `Email's required`],
//         lowercase: true,
//         validate: {
//             validator: function (value) {
//                 return validatorData.isEmail(value);
//             },
//             message: props => `${props} is not a valid Email!`
//         },
//     },
//     password: {
//         type: String,
//         required: [true, `Password's required`],
//         trim: true,
//         validate: {
//             validator: function (value) {
//                 return value.length > 6;
//             },
//             message: props => `Password is greateer than 6!`
//         },
//     },
// });