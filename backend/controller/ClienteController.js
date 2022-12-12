const { response } = require('express');
const cliente = require('../model/clienteModel');
const Sequelize = require('sequelize');


const getCliente = (request,response) =>{
    cliente.findAll().then(function(result){
        return response.status(200).json(result);
    });
}


const getClienteById = function(request, response){
    cliente.
    findOne({where:{
        id:request.params.id
        }
    })
    .then(function(result){
        return response.status(200).json(result);
    })
    .catch(function(result){
        return response.status(406).send
            (
                {
                    "message": "Não foi possivel encontrar o cliente de id "+request.params.id
                }
            )
        }
    )
}

const getClienteByNomeAndCpf = function(request, response){
    cliente.
    findOne({where:{
        Nome:request.params.nome,
        CPF:request.params.CPF
        }
    })
    .then(function(result){
        return response.status(200).json(result);
    })
    .catch(function(result){
        return response.status(406).send
            (
                {
                    "message": "Não foi possivel encontrar o cliente de nome "+request.params.nome
                }
            )
        }
    )
}

const postCliente = function(request, response){

    cliente.create({
        Nome: request.body.nome,
        CPF: request.body.cpf,
        Email: request.body.email,
        id_user:request.body.id_user
    })
    .then(function(data){
        return response.status(200).send({
            "message": "Cliente criado com sucesso"
        });
    })
    .catch(function(err){
        return response.status(406).send({
            "message": "Não foi possivel criar o Cliente. " +request.body.nome +"  "+ err.message
    });
    })
//    return response.status(200).json("Usuário criado com sucesso");
}

const updateCliente = (request, response) =>{
    cliente.update(
        {
            Nome: request.body.nome,
            CPF: request.body.cpf,
            Email:request.body.email,
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