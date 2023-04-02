// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

Product.init(
  {
   product_name: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   price: {
    type: DataTypes.STRING
   },
   stock: {
    type: DataTypes.STRING
   },
   category_id: {
    type: DataTypes.STRING
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
