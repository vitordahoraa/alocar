const { response } = require('express');
const carro = require('../model/carroModel');
const Sequelize = require('sequelize');

const getCarros = function(request, response){//SELECT * FROM carros
    carro.findAll().then(function(result){
        return response.status(200).json(result);
    });
}

const getCarrosById = function(request, response){//SELECT * FROM clientes WHERE id = $request.params.id

    carro
    .findOne(
        {where:
            {
            id: request.params.id
            }
        }
    )
    .then(function(result){
        return response.status(200).json(result);
    })
    .catch(function(result){
        return response.status(406).send
            (
                {
                    "message": "Não foi possivel encontrar o carro de id "+request.params.id
                }
            )
        }
    )

}
const postCarro = function(request, response){//INSERT INTO carros (placa, modelo, diaria, status) VALUES($request.body.placa,$request.body.modelo,$request.body.diaria,1)

    carro.create({
        placa: request.body.placa,
        modelo: request.body.modelo,
        diaria: request.body.diaria,
        status: true
    })
    .then(function(data){
        return response.status(200).send({
            "message": "Carro criado com sucesso"
        });
    })
    .catch(function(err){
        return response.status(406).send({
            "message": "Não foi possivel criar o carro. " + err
    });
    })
}

const updateCarro = (request, response) =>{//UPDATE carros SET placa = $request.body.placa, modelo = $request.body.modelo, diaria = $request.body.diaria, status = $request.body.status, modified_time = CURRENT_TIMESTAMP WHERE id = $request.params.id

    carro.update(
        {
            placa: request.body.placa,
            modelo: request.body.modelo,
            diaria: request.body.diaria,
            status: request.body.status,
            modified_time: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {where:{id:request.params.id}}

    )
    .then(function(result){
        console.log(result)
        if(result == 1)
            return response.status(200).send({"message":"Carro alterado com sucesso"});
        else
            return response.status(400).send({"message":"Não foi possível alterar o carro de id "+ request.params.id});

    });

}

const deleteCarro = function(request, response){ // DELETE FROM carros WHERE id = $request.params.id
    carro.destroy({where:{id:request.params.id}})
    .then(function(result){
        if(result==1)
            return response.status(200).send({"message":"Carro deletado com sucesso"});
        else   
            return response.status(400).send({"message":"Não foi possivel deletar o carro de id "+request.params.id});
    })
}


module.exports = {getCarros,postCarro,updateCarro,deleteCarro,getCarrosById};