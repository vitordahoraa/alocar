const Sequelize = require('sequelize');
const db = require('../Database/connection')

const user = db.define('cliente',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING,
        allowNull: false
    },
    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    Email:{
        type: Sequelize.STRING,
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