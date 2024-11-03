const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Request = sequelize.define(
  "Request",
  {
    // Cột RequestID tự động tăng và là khóa chính
    RequestID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột UserID làm khóa ngoại tham chiếu đến User
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tham chiếu đến model User
        key: "UserID", // Khóa chính UserID của bảng Users
      },
      allowNull: false, // Bắt buộc phải có UserID
    },
    // Cột RequestTypeID làm khóa ngoại tham chiếu đến RequestTypes
    RequestTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "request_types", // Tham chiếu đến model RequestType
        key: "RequestTypeID", // Khóa chính RequestTypeID của bảng RequestTypes
      },
      allowNull: false, // Bắt buộc phải có RequestTypeID
    },
    // Cột RequestDate với giá trị mặc định là thời gian hiện tại
    RequestDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    // Cột Status với các giá trị 'Pending', 'Approved', 'Rejected'
    Status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      allowNull: false,
      defaultValue: "Pending", // Trạng thái mặc định là 'Pending'
    },
    // Cột Description để mô tả chi tiết yêu cầu
    Description: {
      type: DataTypes.TEXT,
      allowNull: true, // Cho phép null
    },
    // Cột ApprovedBy làm khóa ngoại tham chiếu đến User
    ApprovedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tham chiếu đến model User
        key: "UserID", // Khóa chính UserID của bảng Users
      },
      allowNull: true, // Có thể null nếu chưa duyệt
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "requests", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = Request;
