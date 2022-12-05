const Sequelize = require('sequelize');
const db = require('../Database/connection')

const user = db.define('carro',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    placa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    diaria:{
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    created_time: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    modified_time:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
},{
    timestamps:false
});

module.exports = user