const express = require('express');

const UserController = require("../controller/UserController")

const Router = express.Router();

Router.use(express.json());

Router.get('/',UserController.getUsers);
Router.post('/',UserController.postUser);
Router.put('/update/:id',UserController.updateUser);
Router.delete('/delete/:id',UserController.deleteUser);



module.exports = Router;