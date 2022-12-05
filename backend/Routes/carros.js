const express = require('express');

const CarroController = require("../controller/CarroController")

const Router = express.Router();

Router.use(express.json());

Router.get('/',CarroController.getCarros);
Router.get('/:id',CarroController.getCarrosById);
Router.post('/',CarroController.postCarro);
Router.put('/update/:id',CarroController.updateCarro);
Router.delete('/delete/:id',CarroController.deleteCarro);



module.exports = Router;