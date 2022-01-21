const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const app = express()
var db = require('./db/db')
var PORT = 3000
//middlewares
var multer = require('multer');
var upload = multer()
app.use(upload.array()); 
app.use(express.json())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var getAccessToken = require('./generate_token/access_token.json')


const authenticateToken = (req, res, next) => {
const auth = req.headers.authorization;
const token = auth
if(token == null) return res.sendStatus(401)

jwt.verify(token, getAccessToken.access_token, (err, user) => {
    if(err) return res.sendStatus(403)
    req.info = user
    next();
})
}
//get post
app.get('/', authenticateToken, (req, res) => {
    console.log()
    res.json(db.filter((e => e.name === req.info.userName)))

})
//user logIn
app.post('/login', (req, res) => {
    var info = req.body
    var verifyPassword = info.password
    if(verifyPassword === getAccessToken.access_token){
    var aToken = jwt.sign(info, getAccessToken.access_token, { expiresIn: '1m' })
    res.json({access_token : aToken})
    }else{
        res.sendStatus(401)
    }
})

app.get('/test', (req, res) => {
    res.send("hiiii")
})




app.listen(PORT, () => {
    console.log("i'm listening..." + PORT)
})