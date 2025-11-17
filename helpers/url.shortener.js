const db = require('./db');

const urlShortener = async (url) => {
    const charBase62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    console.log(url);
    const stringByte = new TextEncoder().encode(url);
    let bigIntStr = 0n;
    for (let i = 0; i < stringByte.length; i++) {
        bigIntStr += 256n * BigInt(stringByte[i]);
    }
    let unique = false;
    let shortenUrl = '';

    while (!unique) {
        let tempShortenUrl ='';
        let tempNumber = bigIntStr;
        while(tempNumber % 62n !== 0n) {
            tempNumber /= 62n;
            console.log(tempNumber);
            tempShortenUrl += charBase62[tempNumber % 62n];
        }
        let findOne = await db.User.findOne({
            shortenUrl: tempShortenUrl
        });
        if (!findOne) {
            unique = true;
            shortenUrl = tempShortenUrl;
        }
    }
    console.log(shortenUrl);
    console.log(bigIntStr);
    return shortenUrl;
}

module.exports = urlShortener;