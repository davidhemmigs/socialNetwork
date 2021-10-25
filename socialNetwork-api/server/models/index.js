const Sequelize = require('sequelize');

const DB_URL = require('../../db/config');
const Example = require('./example');
const User = require('./usuario');

// import models

const sequelize = new Sequelize(DB_URL.url, {
    define: {
        underscored: true
    }
})

const db = {
    // example
    // User: User(sequelize)
    Example: Example(sequelize),
    User: User(sequelize)

}

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

module.exports = db;