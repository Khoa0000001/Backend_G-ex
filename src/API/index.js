const db = require("../models");

const API = {
  /*ROLE*/
  getAllRoles: async () => await db.Role.findAll(),
  getRoleByID: async (ID) => await db.Role.findByPk(ID),
  createRole: async (args) => await db.Role.create(args),
  updateRole: async (args) => {
    const result = await db.Role.update(args, {
      where: {
        RoleID: args.RoleID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteRole: async (ID) => {
    const result = await db.Role.destroy({
      where: { RoleID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*USER*/
  checkGoogleID: async (ID) =>
    await db.User.findOne({
      where: {
        GoogleID: ID,
      },
    }),
  getAllUsers: async () => await db.User.findAll(),
  getUserByID: async (ID) => await db.User.findByPk(ID),
  getUsersByRoleID: async (ID) =>
    await db.User.findAll({
      where: {
        RoleID: ID,
      },
    }),
  createUser: async (args) => await db.User.create(args),
  updateUser: async (args) => {
    const result = await db.User.update(args, {
      where: {
        UserID: args.UserID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteUser: async (ID) => {
    const result = await db.User.destroy({
      where: { UserID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*SHIFT*/
  getAllShifts: async () => await db.Shift.findAll(),
  getShiftByID: async (ID) => await db.Shift.findByPk(ID),
  createShift: async (args) => await db.Shift.create(args),
  updateShift: async (args) => {
    const result = await db.Shift.update(args, {
      where: {
        ShiftID: args.ShiftID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteShift: async (ID) => {
    const result = await db.Shift.destroy({
      where: { ShiftID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*REQUESTTYPES*/
  getAllRequestTypes: async () => await db.RequestType.findAll(),
  getRequestTypeByID: async (ID) => await db.RequestType.findByPk(ID),
  createRequestType: async (args) => await db.RequestType.create(args),
  updateRequestType: async (args) => {
    const result = await db.RequestType.update(args, {
      where: {
        RequestTypeID: args.RequestTypeID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteRequestType: async (ID) => {
    const result = await db.RequestType.destroy({
      where: { RequestTypeID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*REQUEST*/
  getAllRequests: async () => await db.Request.findAll(),
  getRequestByID: async (ID) => await db.Request.findByPk(ID),
  getRequesByUserID: async (ID) =>
    await db.Request.findAll({
      where: {
        UserID: ID,
      },
    }),
  getRequesByApprovedBy: async (ID) =>
    await db.Request.findAll({
      where: {
        ApprovedBy: ID,
      },
    }),
  getRequesByRequestTypeID: async (ID) =>
    await db.Request.findAll({
      where: {
        RequestTypeID: ID,
      },
    }),
  createRequest: async (args) => await db.Request.create(args),
  updateRequest: async (args) => {
    const result = await db.Request.update(args, {
      where: {
        RequestID: args.RequestID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteRequest: async (ID) => {
    const result = await db.Request.destroy({
      where: { RequestID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*PAYROLL*/
  getAllPayrolls: async () => await db.Payroll.findAll(),
  getPayrollByID: async (ID) => await db.Payroll.findByPk(ID),
  getAllPayrollsByUserID: async (ID) =>
    await db.Payroll.findAll({
      where: {
        UserID: ID,
      },
    }),
  getAllPayrollsByApprovedBy: async (ID) =>
    await db.Payroll.findAll({
      where: {
        ApprovedBy: ID,
      },
    }),
  createPayroll: async (args) => await db.Payroll.create(args),
  updatePayroll: async (args) => {
    const result = await db.Payroll.update(args, {
      where: {
        PayrollID: args.PayrollID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deletePayroll: async (ID) => {
    const result = await db.Payroll.destroy({
      where: { PayrollID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  /*CSVIMPORTLOG*/
  getAllCSVImportLogs: async () => await db.CSVImportLog.findAll(),
  getCSVImportLogByID: async (ID) => await db.CSVImportLog.findByPk(ID),
  createCSVImportLog: async (args) => await db.CSVImportLog.create(args),

  /*ATTENDANCE*/
  getAllAttendances: async () => await db.Attendance.findAll(),
  getAttendanceByID: async (ID) => await db.Attendance.findByPk(ID),
  getAllAttendancesByUserID: async (ID) =>
    await db.Attendance.findAll({
      where: {
        UserID: ID,
      },
    }),
  getAllAttendancesByShiftID: async (ID) =>
    await db.Attendance.findAll({
      where: {
        ShiftID: ID,
      },
    }),
  createAttendance: async (args) => await db.Attendance.create(args),
  updateAttendance: async (args) => {
    const result = await db.Attendance.update(args, {
      where: {
        AttendanceID: args.AttendanceID,
      },
    });
    return result > 0 ? "Update Thành Công" : "Update Thất Bại";
  },
  deleteAttendance: async (ID) => {
    const result = await db.Attendance.destroy({
      where: { AttendanceID: ID },
    });
    return result > 0 ? "Delete Thành Công" : "Delete Thất bại";
  },
  //ELSE
};

module.exports = API;
