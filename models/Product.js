
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}


Product.init(
  {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataType.STRING,
        allowNull: false
    },
    price: {
        type: DataType.DECIMAL,
        allowNull: false,
        validate: {
            isPrice: true
        }
    },
    stock: {
        type: DataType.INTEGER,
        allowNull: false,
        setDefualt,
        validate: {
            isStock: true
        }
    },
    category_id: {
        type: DataType.INTEGER,
        ReferenceError
    }
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

