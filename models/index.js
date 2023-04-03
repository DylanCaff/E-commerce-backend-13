// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category);

// Categories have many Products
Category.belongsToMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(tag, {
  through: {
    model: ProductTag,
    foreignKey: "product_id"
  }
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: "tag_id"
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
