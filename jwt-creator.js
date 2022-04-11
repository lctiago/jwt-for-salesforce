require('dotenv').config()
const jwt = require('jsonwebtoken');
const fs = require('fs');

const now = new Date();
const nowPlus180 = now.setSeconds(now.getSeconds() + 180);
const exp = nowPlus180.valueOf();

const privateKey = fs.readFileSync('./privatekey.pem');

const token = jwt.sign(
  {
    iss: process.env.CLIENT_ID,
    sub: process.env.SALESFORCE_USER,
    aud: process.env.SALESFORCE_LOGIN_URL,
    exp
  },
  privateKey,
  {
    algorithm: 'RS256',
  }
)

console.log(token);