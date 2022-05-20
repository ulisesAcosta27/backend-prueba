const { Order } = require("../models/order.models");
const { User } = require("../models/user.models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password, orderId } = req.body;
    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
      orderId,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, password, orderId } = req.body;
    const user = await User.findByPk(id);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.orderId = orderId;
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllItemByUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    const getAllItemByUser = await User.findOne({
      where: { id: idUser },
      include: { model: Order },
    });
    res.status(200).json(getAllItemByUser);
  } catch (error) {
    console.log(error);
  }
};
const createItemByUser = async (req, res) => {
  const { idUser } = req.params;
  const { state, userId } = req.params;
  try {
    const createItemByUser = await Order.create({ state, userId: idUser });
    res.status(200).json(createItemByUser);
  } catch (error) {
    console.log(error);
  }
};
const deleteItemByUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    const deleteItemByUser = await Order.destroy({id: idUser});
    res.status(204).json(deleteItemByUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  putUser,
  deleteUser,
  // getOrdersUser,
};
