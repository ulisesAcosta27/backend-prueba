const { sequelize } = require("../db/database");
const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.ENUM("creado", "procesando", "cancelado", "completo"),
      allowNull: false,
      defaultValue: "creado",
    },
  },
  { timestamps: false }
);

module.exports = {
  Order,
};
