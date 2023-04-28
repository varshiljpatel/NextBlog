const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    }
}, {
    timestamps: true
});

// userSchema.pre('save', () => {
//     const salt = crypto.randomBytes();
//     const hashPassword = crypto.createHmac();
// })

const User = model('User', userSchema);
module.exports = User;