const Item = require('./Item')
const Aisle = require('./Aisle')
const Recipe = require('./Recipe')

//meal - not necessary for mvp

//id
//name
//dishes [recipe or groceryItem id]

//each ailse has one or many items; each item has one aisle
Aisle.hasMany(Item, {foreignKey: 'aisle_id'})

Item.belongsTo(Aisle, {foreignKey: 'aisle_id'})
//each recipe has many items; each item has one or more recipes
 
//one-to-many
//many-to-many
//pretty confident in this, but not positive
Recipe.belongsToMany(Item, {through: RecipeItem})
Item.belongsToMany(Recipe, {through: RecipeItem})


module.exports = {Item, Aisle, Recipe}