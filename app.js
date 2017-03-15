const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const dotenv            = require('dotenv');
const MailChimpAPI      = require('mailchimp').MailChimpAPI;
const MailchimpWebhook  = require('mailchimp').MailChimpWebhook;
const jsonfile          = require('jsonfile');

// Configuracion de variables del entorno
dotenv.config();
const port          = process.env.PORT || 9090;
const apiKey        = process.env.APIKEY;
// Termina configuracion de variables del entorno

// Importar modelos
const Lista = require('./Objetos/Lista');
const Usuario = require('./Objetos/Usuario');
// Termina importacion modelos

// Obtener lista serializada y guardarla como variable
let lista = new Lista();
(function obtenerLista(){
    let listaSerializada = jsonfile.readFileSync('./data/lista.json');

    for(var i=0;i<listaSerializada.usuariosRojos.length;i++){
        lista.aniadirUsuarioRojo(listaSerializada.usuariosRojos[i]);
    }

    for(var i=0;i<listaSerializada.usuariosAzules.length;i++){
        lista.aniadirUsuarioAzul(listaSerializada.usuariosAzules[i]);
    }
})();

// Termina obtener lista

//let usuario1 = new Usuario('ernestopm20@gmail.com','Ernesto','Azul');
//let usuario2 = new Usuario('ernestopm20@gmail.com','Ernesto','Rojo');
//lista.aniadirUsuarioRojo(usuario1);
//lista.aniadirUsuarioAzul(usuario2);
/*

*/

const webhook = new MailchimpWebhook({port:port});

webhook.on('error', function (error) {
    console.log(error.message);
});

webhook.on('subscribe', function (data, meta) {
    let nuevoUsuario = new Usuario(data.id,data.email,data.merges.FNAME,data.merges.LNAME);
    lista.aniadirUsuarioAzul(nuevoUsuario);
    jsonfile.writeFile('./data/lista.json',lista, {spaces:2}, function (err) {
        if(err) console.log(err);
    });
});

webhook.on('unsubscribe', function (data, meta) {
    console.log(data);
    console.log(data.email+' unsubscribed from your newsletter!'); // Do something with your data!
});


/*
{ id: 'fc77e64aba',
    email: 'ernestopm20@gmail.com',
    email_type: 'html',
    ip_opt: '189.171.177.150',
    ip_signup: '189.171.177.150',
    web_id: '20386413',
    merges:
    { EMAIL: 'ernestopm20@gmail.com',
        FNAME: 'Ernesto',
        LNAME: 'Martinez' },
    list_id: 'c9f9ec127d' }
ernestopm20@gmail.com subscribed to your newsletter!
    { id: 'fc77e64aba',
        email: 'ernestopm20@gmail.com',
        email_type: 'html',
        ip_opt: '189.171.177.150',
        ip_signup: '189.171.177.150',
        web_id: '20386413',
        merges:
            { EMAIL: 'ernestopm20@gmail.com',
                FNAME: 'Ernesto',
                LNAME: 'Martinez' },
        list_id: 'c9f9ec127d' }
    */