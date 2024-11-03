const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Payroll = sequelize.define(
  "Payroll",
  {
    // Cột PayrollID tự động tăng và là khóa chính
    PayrollID: {
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
      allowNull: false, // Không cho phép null
    },
    // Cột MonthYear là tháng tính lương
    MonthYear: {
      type: DataTypes.DATEONLY, // Chỉ lưu ngày/tháng (DATE)
      allowNull: false, // Không cho phép null
    },
    // Cột BaseSalary là lương cơ bản
    BaseSalary: {
      type: DataTypes.DECIMAL(10, 2), // Định dạng lương với tối đa 10 số và 2 chữ số sau dấu thập phân
      allowNull: false, // Không cho phép null
    },
    // Cột OvertimeHours là số giờ làm thêm
    OvertimeHours: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true, // Cho phép null nếu không có giờ làm thêm
    },
    // Cột TotalSalary là tổng lương
    TotalSalary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, // Không cho phép null
    },
    // Cột ApprovedBy làm khóa ngoại tham chiếu đến User (người duyệt lương)
    ApprovedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tham chiếu đến model User
        key: "UserID", // Tham chiếu khóa chính UserID của bảng Users
      },
      allowNull: true, // Có thể null nếu chưa được duyệt
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "payrolls", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = Payroll;
