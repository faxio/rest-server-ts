import { Sequelize } from 'sequelize'

const db = new Sequelize('testing', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    /*
    // quitar los mensajes de la bd que se muestran en la consola
    logging: false, 
    */
});

export default db;