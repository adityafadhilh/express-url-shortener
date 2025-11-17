const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);