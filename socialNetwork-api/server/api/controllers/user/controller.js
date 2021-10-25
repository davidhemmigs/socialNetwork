const db = require('../../../models');

class UserController {

    list() {
        return db.User.findAll({
            attributes: [
                'id',
                'firstName',
                'lastName',
                'email',
                'phone',
                'password'
            ]
        })
    }

}

module.exports = new UserController();