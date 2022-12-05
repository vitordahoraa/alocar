const Sequelize = require('sequelize');
const db = require('../Database/connection')

const user = db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
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
    },
    client_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id'
        }
    }
},{
    timestamps:false
});

module.exports = user