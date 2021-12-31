'use strict'

var mongoose = require('mongoose');
var app = require('../src/app');
var port = process.env.PORT || 3700;

app.get('/', function (req, res) {
	res.send({message: 'Microservicio Cliente V.1'});
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/clientesApi',{
	useNewUrlParser: true,
	useUnifiedTopology: true
})
        .then((db) => {
			// Creacion del servidor
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");
			console.log("DB conectada: "+db.connection.host);
        	app.listen(port, () => {
        		console.log(`Servidor corriendo correctamente en la url: localhost: ${port}`);
        	});
        })
        .catch(err => console.log(err));