var ACCESS_TOKEN = require('crypto').randomBytes(64).toString('hex')
const fs = require('fs')
const generateAccessToken = () => {
    var token = {
        access_token : ACCESS_TOKEN
    }
    fs.writeFileSync(__dirname + '/access_token.json', JSON.stringify(token))
    return token;
}
module.exports = generateAccessToken;