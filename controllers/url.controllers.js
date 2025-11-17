const dns = require('node:dns');
const userServices = require('../services/url.services');
const urlShortener = require('../helpers/url.shortener');
const urlServices = require('../services/url.services');

const getUrl = async (req, res) => {
    try {
        const {shortenUrl} = req.params;
        const data = await userServices.findByUrl(shortenUrl);
        console.log(data);
        return res.redirect('http://' + data.realUrl);
    } catch (error) {

    }

};

const createShortenUrl = async (req, res) => {
    try {
        const { url } = req.body;
        dns.lookup(url, (err, address, family) => {
            console.log(err);
            // if (err) {
            //      return res.json({
            //         error: err
            //      })
            // }
            console.log(address)
        });
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

module.exports = {
    getUrl,
    createShortenUrl
}