const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    realUrl: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    shortenUrl: {
        type: Schema.Types.String,
        required: true,
        unique: true
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

module.exports = mongoose.model('Url', UrlSchema);