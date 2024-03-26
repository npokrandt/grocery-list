//the main table. these will be linked to the order table (for ordering) and whatever recipes they are in
const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/connection')

class Item extends Model{}

Item.init(
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
        },
        price: {
            type: DataTypes.FLOAT({decimals: 2}),
        },
        needMore: { 
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        aisle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Aisle',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "item"
    }
)

module.exports = Item

//aisleId
//recipeId?