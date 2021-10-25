const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models){

        }
    }

    Example.init(
        {
            firtsName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'user'
        }
    )
    return User
}