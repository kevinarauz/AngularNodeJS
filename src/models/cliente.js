'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
	_id: mongoose.Types.ObjectId,
    cedula: String,
	nombres: String,
	apellidos: String,
	edad: Number,
	fechaNacimiento: Date
});

module.exports = mongoose.model('Cliente', ClienteSchema);