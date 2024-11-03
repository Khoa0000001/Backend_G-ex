const { Sequelize } = require("sequelize");
const { database } = require("../config.json");

const dbInfor = database.development;

const sequelize = new Sequelize(
  dbInfor.database,
  dbInfor.username,
  dbInfor.password,
  {
    host: dbInfor.host,
    dialect: dbInfor.dialect,
    logging: false, // Tắt logging nếu không cần
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, connect };
