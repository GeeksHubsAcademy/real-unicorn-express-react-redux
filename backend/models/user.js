const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    surname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    telephone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        trim: false,
        unique: false,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    roleId: {
        type: String,
        required: true
    }
}, { strict: true });

const UserModel = mongoose.model('user', UserSchema);
module.exports = { UserSchema, UserModel };