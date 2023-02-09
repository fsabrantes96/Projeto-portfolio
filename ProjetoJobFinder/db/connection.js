const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

// para exportar a conexão
module.exports = sequelize