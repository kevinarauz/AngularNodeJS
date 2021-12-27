'use strict'

var Cliente = require('../models/cliente');
var fs = require('fs');
var path = require('path');
const { Console } = require('console');
var mongoose = require('mongoose');

var controller = {

	saveCliente: function(req, res){
		var cliente = new Cliente(req.body);
		cliente._id = new mongoose.Types.ObjectId();
		/*
		var params = req.body;
        cliente.cedula = params.cedula;
        cliente.nombres = params.nombres;
        cliente.apellidos = params.apellidos;
        cliente.edad = params.edad;
		cliente.fechaNacimiento = params.fechaNacimiento;*/
        console.log(cliente);
		cliente.save((err, clienteStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!clienteStored) return res.status(404).send({message: 'No se ha podido guardar el cliente.'});

			//return res.status(200).send(clienteStored);
			return res.status(200).send({message: 'Usuario creado con exito'});
		});
	},

	getCliente: function(req, res){
		var clienteId = new mongoose.Types.ObjectId(req.params.id);
		
		if(clienteId == null) return res.status(404).send({message: 'El cliente no tine identificador valido.'});
		
		Cliente.findById(clienteId, (err, cliente) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!cliente) return res.status(404).send({message: 'El cliente no existe.'});
            
			return res.status(200).json(cliente);

		});
	},

	getClienteCedula: function(req, res){
		var cedula = req.params.cedula;
		if(cedula == null) return res.status(404).send({message: 'El cliente no tiene un identificador valido.'});
		
		Cliente.findOne({cedula}, (err, cliente) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!cliente) return res.status(404).send({message: 'El cliente no existe.'});
            
			return res.status(200).json(cliente);

		});
	},

	getClientes: function(req, res){

		Cliente.find({}).sort({_id: -1}).exec((err, clientes) => {
			console.log(clientes);
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!clientes) return res.status(404).send({message: 'No hay clientes que mostrar.'});
			
			return res.status(200).json(clientes);
		});

	},

	updateCliente: function(req, res){
		var clienteId = new mongoose.Types.ObjectId(req.params.id);
		var update = req.body;

		Cliente.findByIdAndUpdate(clienteId, update, {new:true}, (err, clienteUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!clienteUpdated) return res.status(404).send({message: 'No existe el cliente para actualizar'});

			return res.status(200).send({
				cliente: clienteUpdated
			});
		});

	},

	deleteCliente: function(req, res){
		var clienteId = new mongoose.Types.ObjectId(req.params.id);
		Cliente.findByIdAndRemove(clienteId, (err, clienteRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el cliente'});

			if(!clienteRemoved) return res.status(404).send({message: "No se puede eliminar ese cliente."});

			return res.status(200).send(clienteRemoved);
		});
	}

};

module.exports = controller;