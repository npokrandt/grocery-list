const sequelize = require('../config/connection')
const {Item} = require('../models')

const itemData = require('./itemSeeds.json')

const seedDatabase = async () => {
    await sequelize.sync({force: true})

    await Item.bulkCreate(itemData, {
        individualHooks: true,
        returning: true
    })
}

seedDatabase()