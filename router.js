const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) =>{

    res.render('index.ejs');

})

router.get('/login', (req, res) =>{

    res.render('login.ejs');

})

const crud = require("./Controllers/crud");

router.post('/save', crud.save)
module.exports =  router;