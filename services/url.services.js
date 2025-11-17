const {Url} = require('../helpers/db');

const findAll = async () => {
    try {
        const res = await Url.find();
        if (!res) throw new Error("Failed to get URL");
        return res;
    } catch (error) {
        throw error;
    }
};

const findByUrl = async (shortenUrl) => {
    try {
        console.log(shortenUrl);
        const res = await Url.findOne({
            shortenUrl
        });
        if (!res) throw new Error('URL not found');
        return res;
    } catch (error) {
        throw error;
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
};

const deleteByUrl = async (url) => {
    try {
        const res = await Url.deleteOne({
            realUrl: url
        });
        if (!res) throw new Error('Failed to delete URL');
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAll,
    findByUrl,
    create,
    deleteByUrl
};