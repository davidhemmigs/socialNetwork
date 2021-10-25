const db = require('../../../models');

class ExampleController {

    list() {
        return db.Example.findAll({
            attributes: [
                'id',
                'name'
            ]
        })
    }

}

module.exports = new ExampleController();