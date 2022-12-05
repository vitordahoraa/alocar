const express = require('express');

const ClienteController = require("../controller/ClienteController")

const Router = express.Router();

Router.use(express.json());

Router.get('/',ClienteController.getCliente);
Router.post('/',ClienteController.postCliente);
Router.put('/update/:id',ClienteController.updateCliente);
Router.delete('/delete/:id',ClienteController.deleteCliente);



module.exports = Router;