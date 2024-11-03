const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Role = sequelize.define(
  "Role",
  {
    // Cột RoleID tự động tăng và là khóa chính
    RoleID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột RoleName
    RoleName: {
      type: DataTypes.STRING(255),
    },
    // Cột Description với mô tả
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  }
);

module.exports = Role;
