const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router =require('./router')


// habilitar express
const app = express();

// conectar  con mongo 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/prueba", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connectada");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );
 
  // habilitar el body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  // habilitar router 

  app.use('/',router());

// puerto del servidor 

app.listen(4000, () => {
    console.log('Servidor funcionando')
})