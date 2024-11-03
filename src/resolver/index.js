const { updateRole } = require("../API");
const { createJWT } = require("../JWT/JWTAction");

const resolvers = {
  //QUERY
  Query: {
    // ROLE
    roles: async (_, args, { api }) => await api.getAllRoles(),
    role: async (_, args, { api }) => await api.getRoleByID(args.RoleID),
    //USER
    users: async (_, args, { api }) => await api.getAllUsers(),
    user: async (_, args, { api }) => await api.getUserByID(args.UserID),
    //SHIFT
    shifts: async (_, args, { api }) => await api.getAllShifts(),
    shift: async (_, args, { api }) => await api.getShiftByID(args.ShiftID),
    //REQUESTTYPE
    requestTypes: async (_, args, { api }) => await api.getAllRequestTypes(),
    requestType: async (_, args, { api }) =>
      await api.getRequestTypeByID(args.RequestTypeID),
    //PAYROLL
    payrolls: async (_, args, { api }) => await api.getAllPayrolls(),
    payroll: async (_, args, { api }) =>
      await api.getPayrollByID(args.PayrollID),
    //CSVIMPORTLOG
    csvImportLogs: async (_, args, { api }) => await api.getAllCSVImportLogs(),
    csvImportLog: async (_, args, { api }) =>
      await api.getCSVImportLogByID(args.LogID),
    //ATTENDANCE
    attendances: async (_, args, { api }) => await api.getAllAttendances(),
    attendance: async (_, args, { api }) =>
      await api.getAttendanceByID(args.AttendanceID),
    //REQUEST
    requests: async (_, args, { api }) => await api.getAllRequests(),
    request: async (_, args, { api }) =>
      await api.getRequestByID(args.RequestID),
    //ELSE
  },
  //MUTATION
  Mutation: {
    //ROLE
    createRole: async (_, args, { api, user }) => await api.createRole(args),
    updateRole: async (_, args, { api }) => await api.updateRole(args),
    deleteRole: async (_, args, { api }) => await api.deleteRole(args.RoleID),
    //USER
    createUser: async (_, args, { api }) => await api.createUser(args),
    updateUser: async (_, args, { api }) => await api.updateUser(args),
    deleteUser: async (_, args, { api }) => await api.deleteUser(args.RoleID),
    //SHIFT
    createShift: async (_, args, { api }) => await api.createShift(args),
    updateShift: async (_, args, { api }) => await api.updateShift(args),
    deleteShift: async (_, args, { api }) =>
      await api.deleteShift(args.ShiftID),
    //REQUESTTYPE
    createRequestType: async (_, args, { api }) =>
      await api.createRequestType(args),
    updateRequestType: async (_, args, { api }) =>
      await api.updateRequestType(args),
    deleteRequestType: async (_, args, { api }) =>
      await api.deleteRequestType(args.RequestTypeID),
    //PAYROLL
    createPayroll: async (_, args, { api }) => await api.createPayroll(args),
    updatePayroll: async (_, args, { api }) => await api.updatePayroll(args),
    deletePayRoll: async (_, args, { api }) =>
      await api.deletePayroll(args.PayrollID),
    //CSVIMPORTLOG
    createCSVImportLog: async (_, args, { api }) =>
      await api.createCSVImportLog(args),
    updateCSVImportLog: async (_, args, { api }) =>
      await api.updateCSVImportLog(args),
    deleteCSVImportLog: async (_, args, { api }) =>
      await api.deleteCSVImportLog(args.LogID),
    //ATTENDANCE
    createAttendance: async (_, args, { api }) =>
      await api.createAttendance(args),
    updateAttendance: async (_, args, { api }) =>
      await api.updateAttendance(args),
    deleteAttendance: async (_, args, { api }) =>
      await api.deleteAttendance(args.AttendanceID),
    //REQUEST
    createRequest: async (_, args, { api }) => await api.createRequest(args),
    updateRequest: async (_, args, { api }) => await api.updateRequest(args),
    deleteRequest: async (_, args, { api }) =>
      await api.deleteRequest(args.RequestID),
    //ELSE
    login: async (_, args, { api }) => {
      const checkGoogleID = await api.checkGoogleID(args.GoogleID);
      let token = null;
      const valueUser = checkGoogleID?.dataValues;

      if (valueUser) {
        const Role = await api.getRoleByID(valueUser.RoleID);
        const valueRole = Role?.dataValues;
        delete valueUser.GoogleID;
        token = createJWT({ ...valueUser, ...valueRole });
      } else {
        throw new Error("Invalid credentials");
      }
      return {
        FullName: valueUser.FullName,
        Email: valueUser.Email,
        Status: valueUser.Status,
        State: valueUser.State,
        Token: token,
      };
    },
  },
  // ELSE
  User: {
    Role: async (_, args, { api }) => await api.getRoleByID(_.RoleID),
    Requirements: async (_, args, { api }) =>
      await api.getRequesByUserID(_.UserID),
    Requests_processed: async (_, args, { api }) =>
      await api.getRequesByApprovedBy(_.UserID),
    Attendances: async (_, args, { api }) =>
      await api.getAllAttendancesByUserID(_.UserID),
    Payrolls: async (_, args, { api }) =>
      await api.getAllPayrollsByUserID(_.UserID),
    Approved_payroll: async (_, args, { api }) =>
      await api.getAllPayrollsByApprovedBy(_.UserID),
  },
  Role: {
    Users: async (_, args, { api }) => await api.getUsersByRoleID(_.RoleID),
  },
  CSVImportLog: {
    ImportedBy: async (_, args, { api }) => await api.getUserByID(_.ImportedBy),
  },
  Attendance: {
    User: async (_, args, { api }) => await api.getUserByID(_.UserID),
    Shift: async (_, args, { api }) => await api.getShiftByID(_.ShiftID),
  },
  Shift: {
    Attendances: async (_, args, { api }) =>
      await api.getAllAttendancesByShiftID(_.ShiftID),
  },
  Request: {
    User: async (_, args, { api }) => await api.getUserByID(_.UserID),
    ApprovedBy: async (_, args, { api }) => await api.getUserByID(_.ApprovedBy),
    RequestType: async (_, args, { api }) =>
      await api.getRequestTypeByID(_.RequestTypeID),
  },
  RequestType: {
    Requests: async (_, args, { api }) =>
      await api.getRequesByRequestTypeID(_.RequestTypeID),
  },
  Payroll: {
    User: async (_, args, { api }) => await api.getUserByID(_.UserID),
    ApprovedBy: async (_, args, { api }) => await api.getUserByID(_.ApprovedBy),
  },
};

module.exports = resolvers;
