//collections of items. I'll need to look up how that one works
const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/connection')

class Recipe extends Model{}

Recipe.init(
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
        }
    }
)

module.exports = Recipe
//recipe
//id int
//name string
//ingredients [string or id]