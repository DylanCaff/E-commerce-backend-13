// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsToMany(Category, {
  through: {
    model: Tag,
    unique: false
  },
   as:
});

// Categories have many Products
Category.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },

  as:
} )

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
