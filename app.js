const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv');
const MailChimpAPI  = require('mailchimp').MailChimpAPI;

// Configuracion de variables del entorno
dotenv.config();
const port          = process.env.PORT || 9090;
const apiKey        = process.env.APIKEY;
// Termina configuracion de variables del entorno

app.get('/hook',function(req,res){
    console.log('req',req);
    console.log('res',res);
});

app.use(bodyParser.json());
app.listen(function callback(){
   console.log("Aplicacion corriendo en puerto: "+port);
});