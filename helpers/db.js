const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
 .then(() => {
        console.log('Connected DB!');
    });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.models'),
    Url: require('../models/url.models')
};

