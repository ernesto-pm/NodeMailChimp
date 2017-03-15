const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const dotenv            = require('dotenv');
const MailChimpAPI      = require('mailchimp').MailChimpAPI;
const MailchimpWebhook  = require('mailchimp').MailChimpWebhook;

// Configuracion de variables del entorno
dotenv.config();
const port          = process.env.PORT || 9090;
const apiKey        = process.env.APIKEY;
// Termina configuracion de variables del entorno

const webhook = new MailchimpWebhook({port:port});

webhook.on('error', function (error) {
    console.log(error.message);
});

webhook.on('subscribe', function (data, meta) {
    console.log(data.email+' subscribed to your newsletter!'); // Do something with your data!
});

webhook.on('unsubscribe', function (data, meta) {
    console.log(data.email+' unsubscribed from your newsletter!'); // Do something with your data!
});

app.use(bodyParser.json());
app.get('/hook',function(req,res){
    console.log('req',req.body);
    res.send('hi!');
});

/*
app.listen(port,function callback(){
   console.log("Aplicacion corriendo en puerto: "+port);
});
    */