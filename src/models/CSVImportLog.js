const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const CSVImportLog = sequelize.define(
  "CSVImportLog",
  {
    // Cột LogID tự động tăng và là khóa chính
    LogID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Cột ImportedBy làm khóa ngoại tham chiếu đến User
    ImportedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tham chiếu đến model User
        key: "UserID", // Tham chiếu khóa chính UserID của bảng Users
      },
      allowNull: false, // Không cho phép null
    },
    // Cột ImportDate là ngày nhập dữ liệu
    ImportDate: {
      type: DataTypes.DATE, // Sử dụng DATE để lưu timestamp nhập dữ liệu
      defaultValue: DataTypes.NOW, // Mặc định là thời gian hiện tại
      allowNull: false, // Không cho phép null
    },
    // Cột FilePath là đường dẫn file CSV
    FilePath: {
      type: DataTypes.STRING(255), // Định dạng đường dẫn với tối đa 255 ký tự
      allowNull: false, // Không cho phép null
    },
    // Cột Status là trạng thái nhập dữ liệu, có thể là 'Success' hoặc 'Failed'
    Status: {
      type: DataTypes.ENUM("Success", "Failed"),
      allowNull: false, // Không cho phép null
    },
    // Cột State với giá trị mặc định là 'Active'
    State: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active", // Giá trị mặc định là 'Active'
      allowNull: false,
    },
  },
  {
    tableName: "csv_import_logs", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

module.exports = CSVImportLog;
