const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    class Example extends Model {
        static associate(models){

        }
    }

    Example.init(
        {
            name: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: 'example'
        }
    )
    return Example
}