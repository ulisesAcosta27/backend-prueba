const { request } = require('express')
const { User } = require("../models/user.models");

const findUser = async (req = request, res, next) => {
  const { name } = req.body;
  try {
    const findUser = await User.findOne({
      where: { name },
    });
    if (findUser) res.status(400).json({ msg: "User just exist" });
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findUser,
};
