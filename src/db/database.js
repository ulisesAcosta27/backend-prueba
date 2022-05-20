const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Connection has been stablished seccessfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};
main();

module.exports = {
  sequelize,
};
