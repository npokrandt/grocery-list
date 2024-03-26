//this model will mostly be aisle titles with numeric ids attached to them. It will be used in sorting the grocery list
const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/connection')

class Aisle extends Model{}

Aisle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "aisle"
    }
)

module.exports = Aisle

//aisleOrder
//name