const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected DB!');
    }).catch((err) => {
        console.log('Failed to connect DB!');
        console.log(err);
    });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.models'),
    Url: require('../models/url.models')
};

