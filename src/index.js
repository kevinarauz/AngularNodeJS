'use strict'

var mongoose = require('mongoose');
var app = require('../src/app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/clientesApi',{
	useNewUrlParser: true,
	useUnifiedTopology: true
})
        .then((db) => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");
			console.log("DB conectada: "+db.connection.host);
        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:"+port);
        	});

        })
        .catch(err => console.log(err));