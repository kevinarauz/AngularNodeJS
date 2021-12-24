'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
	_id: mongoose.Types.ObjectId,
    cedula: Number,
	nombres: String,
	apellidos: String,
	edad: Number,
	fechaNacimiento: Date
});

module.exports = mongoose.model('Cliente', ClienteSchema);