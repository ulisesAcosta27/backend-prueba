const { Product } = require("../models/products.models");
const { Category } = require("../models/category.models");
const { Order } = require("../models/order.models");
const { LineOrder } = require("../models/lineOrder.models");
const { User } = require("../models/user.models");

//Category => Products
Product.hasMany(Category, { foreignKey: "productId" });
Category.belongsTo(Product);

//Order => User
User.hasOne(Order, { foreignKey: "userId" });
Order.belongsTo(User);

//Order => LineOrder
Order.hasMany(LineOrder, { foreignKey: "orderId" });
LineOrder.belongsTo(Order);

//Product => LineOrder
Product.hasMany(LineOrder, { foreignKey: "productId" });
LineOrder.belongsTo(Product);