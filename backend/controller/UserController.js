const { response } = require('express');
const user = require('../model/userModel');
const Sequelize = require('sequelize');

const getUsers = function(request, response){
    user.findAll().then(function(result){
        return response.status(200).json(result);
    });
}

const getUserByUsername = function(request, response){
    user.
    findOne({
        where:{
            username:request.params.username
        }
    })
    .then((result)=>{
            return response.status(200).send(result)
        }

    )
    .cathc((err)=>{
        return response.status(406).send
            (
                {
                    "message": "Não foi possivel encontrar o user de username "+request.params.username
                }
            )
        }
    )
}
const postUser = function(request, response){

    let result = fetch('http://localhost:3001/users/?username='+username,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if(!response.ok){
            return response.status(406).send(
                {
                "message": "Não foi possivel criar o usuário. Usu�rio j� existente"
                }
            )
        }
    })


    user.create({
        username: request.body.username,
        password: request.body.password
    })
    .then(function(data){
        return response.status(200).send({
            "message": "Usuário criado com sucesso"
        });
    })
    .catch(function(err){
        return response.status(406).send({
            "message": "Não foi possivel criar o usuário. " + err
    });
    })
//    return response.status(200).json("Usuário criado com sucesso");
}

const updateUser = (request, response) =>{
    user.update(
        {
            username: request.body.username,
            password: request.body.password,
            modified_time: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {where:{id:request.params.id}}

    )
    .then(function(result){
        console.log(result)
        if(result == 1)
            return response.status(200).send({"message":"Usuário alterado com sucesso"});
        else
            return response.status(400).send({"message":"Não foi possível alterar o usuário de id "+ request.params.id});

    });

}

const deleteUser = function(request, response){
    user.destroy({where:{id:request.params.id}})
    .then(function(result){
        if(result==1)
            return response.status(200).send({"message":"Usuário deletado com sucesso"});
        else   
            return response.status(400).send({"message":"Não foi possivel deletar o usuário de id "+request.params.id});
    })
}


module.exports = {getUsers,postUser,updateUser,deleteUser,getUserByUsername};