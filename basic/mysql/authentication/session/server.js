
const express = require('express')
const session = require('express-session')
const app = express()
const path = require('path')
const route = require('./route/index')
app.use(session({
    secret : 'webslesson',
    resave : true,
    saveUninitialized : true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs')
app.use('/api',route)

app.listen(3000,function(err){
    console.log('server in process 3000')
})