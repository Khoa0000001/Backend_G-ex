const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Shift = sequelize.define(
  "Shift",
  {
    // Cột ShiftID tự động tăng và là khóa chính
    ShiftID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột ShiftName
    ShiftName: {
      type: DataTypes.STRING(100),
      allowNull: false, // Không cho phép null
    },
    // Cột StartTime (Giờ bắt đầu ca)
    StartTime: {
      type: DataTypes.TIME,
      allowNull: false, // Không cho phép null
    },
    // Cột EndTime (Giờ kết thúc ca)
    EndTime: {
      type: DataTypes.TIME,
      allowNull: false, // Không cho phép null
    },
    // Cột Description (Mô tả ca làm việc)
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
    tableName: "shifts", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = Shift;
