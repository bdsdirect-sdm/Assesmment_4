import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('userDetails','root','Password123#@!',{
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
