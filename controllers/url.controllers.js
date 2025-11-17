const dns = require('node:dns');
const userServices = require('../services/url.services');
const urlShortener = require('../helpers/url.shortener');
const urlServices = require('../services/url.services');

const getAllUrl = async (req, res) => {
    try {
        const result = await urlServices.findAll();
        return res.json({
            data: result
        });
    } catch (error) {
        console.log('error');
        console.log(error);
        return res.json({
            error: error.message
        });
    }
}

const getUrl = async (req, res) => {
    try {
        const { shortenUrl } = req.params;
        const data = await userServices.findByUrl(shortenUrl);
        console.log(data);
        return res.redirect('http://' + data.realUrl);
    } catch (error) {
        console.log('error');
        console.log(error);
        return res.json({
            error: error.message
        });
    }

};

const createShortenUrl = async (req, res) => {
    try {
        const { url } = req.body;
        let error;
        dns.lookup(url, (err, address, family) => {
            console.log(err);
            if (err) {
                error = err;
                return;
            }
            console.log(address)
        });
        if (error) throw new Error('URL is not valid');
        const shortenUrl = await urlShortener(url);
        const result = await urlServices.create(url, shortenUrl);
        return res.json({
            data: result
        });
    } catch (error) {
        console.log('error');
        console.log(error);
        return res.json({
            error: error.message
        });
    }
};

const deleteUrl = async (req, res) => {
    try {
        const { url } = req.params;
        await urlServices.deleteByUrl(url);
        return res.json({
            message: 'Successfully deleted URL'
        });
    } catch (error) {
        console.log('error');
        console.log(error);
        return res.json({
            error: error.message
        });
    }
}

module.exports = {
    getAllUrl,
    getUrl,
    createShortenUrl,
    deleteUrl
}