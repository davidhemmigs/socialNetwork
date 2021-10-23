const Server = require('./common/server');
const db = require('./models').sequelize;

db.sync({force: true}).then(() => {
    Server.listen(3001,() => {
        console.log('prueba')
    })
})