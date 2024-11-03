const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const RequestType = sequelize.define(
  "RequestType",
  {
    // Cột RequestTypeID tự động tăng và là khóa chính
    RequestTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột RequestTypeName là tên loại yêu cầu, unique
    RequestTypeName: {
      type: DataTypes.STRING(100),
      allowNull: false, // Không cho phép null
    },
    // Cột Description là mô tả của loại yêu cầu
    Description: {
      type: DataTypes.TEXT,
      allowNull: true, // Cho phép null
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false, // Không cho phép null
    },
  },
  {
    tableName: "request_types", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = RequestType;
