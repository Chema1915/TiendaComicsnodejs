const express = require("express");
const app = express();

/*
app.get('/', (req, res)=>{
    res.send('hola');
});
*/

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use(express(JSON));

app.use('/', require('./router'));

app.listen(8088, ()=>{

    console.log('SERVER corriendo en http://localhost:8088');

});