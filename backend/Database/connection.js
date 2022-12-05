const Sequelize= require('sequelize');
const connection = new Sequelize('alocar','root','database_for_noobies',{
    dialect:'mysql',
    host:'localhost',
    port:'3306'
})


module.exports = connection