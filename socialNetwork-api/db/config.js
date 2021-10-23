require('dotenv').config();

const ENV = process.env.CI ? 'ci' : process.env.NODE_ENV || 'development';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME  } = process.env;

const config = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT
    },

    test: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        port: DB_PORT
    },

    ci: {
        url: `postgres:postgres@${DB_HOST}:${DB_PORT}/postgres`
    }
}[ENV];

config.url = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

module.exports = config;