const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require ('express-myconnection');


// rutas

const productosRoutes = require('./routes/productos');

//configuracion

app.set('port', process.env.PORT || 3300);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//midd
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'mysql'
}, 'single'));

//nos permite recibir los campos del fo
app.use(express.urlencoded({extended: false}));


app.use('/', productosRoutes);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log("servidor corriendo");
})