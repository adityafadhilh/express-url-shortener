const {Url} = require('../helpers/db');

const findByUrl = async (shortenUrl) => {
    try {
        console.log(shortenUrl);
        const res = await Url.findOne({
            shortenUrl
        });
        return res;
    } catch (error) {
        
    }
};

const create = async (url, shortenUrl) => {
    try {
        const findOne = await Url.findOne({
            realUrl: url
        });
        if (findOne) throw new Error('URL already exists');
        const res = await Url.create({
            realUrl: url,
            shortenUrl
        });
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findByUrl,
    create
};