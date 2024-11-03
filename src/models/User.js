const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    // Cột UserID tự động tăng và là khóa chính
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột FullName
    FullName: {
      type: DataTypes.STRING(255),
      allowNull: true, // Cho phép null vì không bắt buộc
    },
    // Cột Email với unique constraint
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false, // Không cho phép null
    },
    // Cột RoleID làm khóa ngoại tham chiếu đến Role
    RoleID: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles", // Tham chiếu đến model Role
        key: "RoleID", // Tham chiếu khóa chính RoleID của bảng Roles
      },
    },
    // Cột GoogleID
    GoogleID: {
      type: DataTypes.STRING(255),
      allowNull: true, // Cho phép null
    },
    // Cột State với giá trị mặc định là 'Active'
    Status: {
      type: DataTypes.ENUM("Pending", "Approved"),
      allowNull: false,
      defaultValue: "Pending", // Trạng thái mặc định là 'Pending'
    },
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "users", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = User;
