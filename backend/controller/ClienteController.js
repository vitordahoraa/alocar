const { response } = require('express');
const cliente = require('../model/clienteModel');
const Sequelize = require('sequelize');

const getCliente = function(request, response){
    cliente.findAll().then(function(result){
        return response.status(200).json(result);
    });
}
const postCliente = function(request, response){

    cliente.create({
        nome: request.body.nome,
        cpf: request.body.cpf
    })
    .then(function(data){
        return response.status(200).send({
            "message": "Cliente criado com sucesso"
        });
    })
    .catch(function(err){
        return response.status(406).send({
            "message": "Não foi possivel criar o Cliente. " + err
    });
    })
//    return response.status(200).json("Usuário criado com sucesso");
}

const updateCliente = (request, response) =>{
    cliente.update(
        {
            nome: request.body.nome,
            cpf: request.body.cpf,
            modified_time: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {where:{id:request.params.id}}

    )
    .then(function(result){
        if(result == 1)
            return response.status(200).send({"message":"Cliente alterado com sucesso"});
        else
            return response.status(400).send({"message":"Não foi possível alterar o cliente de id "+ request.params.id});

    });

}

const deleteCliente = function(request, response){
    cliente.destroy({where:{id:request.params.id}})
    .then(function(result){
        if(result==1)
            return response.status(200).send({"message":"Cliente deletado com sucesso"});
        else   
            return response.status(400).send({"message":"Não foi possivel deletar o cliente de id "+request.params.id});
    })
}


module.exports = {getCliente,postCliente,updateCliente,deleteCliente};