"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ts-usuarios', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    /*
    // quitar los mensajes de la bd que se muestran en la consola
    logging: false,
    */
});
exports.default = db;
//# sourceMappingURL=connection.js.map