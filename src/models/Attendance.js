const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Attendance = sequelize.define(
  "Attendance",
  {
    // Cột AttendanceID tự động tăng và là khóa chính
    AttendanceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột UserID làm khóa ngoại tham chiếu đến User
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tham chiếu đến model User
        key: "UserID", // Tham chiếu khóa chính UserID của bảng Users
      },
    },
    // Cột ShiftID làm khóa ngoại tham chiếu đến Shift
    ShiftID: {
      type: DataTypes.INTEGER,
      references: {
        model: "shifts", // Tham chiếu đến model Shift
        key: "ShiftID", // Tham chiếu khóa chính ShiftID của bảng Shifts
      },
    },
    // Cột AttendanceDate là ngày làm việc
    AttendanceDate: {
      type: DataTypes.DATEONLY, // Chỉ lưu ngày (DATE)
      allowNull: false, // Không cho phép null
    },
    // Cột Status là ENUM với các giá trị 'Present', 'Absent', 'Late'
    Status: {
      type: DataTypes.ENUM("Present", "Absent", "Late"),
      allowNull: false, // Không cho phép null
    },
    // Cột OvertimeHours là số giờ làm thêm
    OvertimeHours: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true, // Cho phép null nếu không có làm thêm giờ
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "attendances", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = Attendance;
