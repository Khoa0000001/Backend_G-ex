const { rule, shield, allow } = require("graphql-shield");

const isAuthenticated = rule()((parent, args, { user }) => {
  return Boolean(user); // Kiểm tra xem người dùng đã đăng nhập chưa
});

const permissions = shield(
  {
    Query: {
      // ROLE
      roles: isAuthenticated,
      role: isAuthenticated,
      //USER
      users: isAuthenticated,
      user: isAuthenticated,
      //SHIFT
      shifts: isAuthenticated,
      shift: isAuthenticated,
      //REQUESTTYPE
      requestTypes: isAuthenticated,
      requestType: isAuthenticated,
      //PAYROLL
      payrolls: isAuthenticated,
      payroll: isAuthenticated,
      //CSVIMPORTLOG
      csvImportLogs: isAuthenticated,
      csvImportLog: isAuthenticated,
      //ATTENDANCE
      attendances: isAuthenticated,
      attendance: isAuthenticated,
      //REQUEST
      requests: isAuthenticated,
      request: isAuthenticated,
      //ELSE
    },
    //MUTATION
    Mutation: {
      //ROLE
      createRole: isAuthenticated,
      updateRole: isAuthenticated,
      deleteRole: isAuthenticated,
      //USER
      createUser: isAuthenticated,
      updateUser: isAuthenticated,
      deleteUser: isAuthenticated,
      //SHIFT
      createShift: isAuthenticated,
      updateShift: isAuthenticated,
      deleteShift: isAuthenticated,
      //REQUESTTYPE
      createRequestType: isAuthenticated,
      updateRequestType: isAuthenticated,
      deleteRequestType: isAuthenticated,
      //PAYROLL
      createPayroll: isAuthenticated,
      updatePayroll: isAuthenticated,
      deletePayRoll: isAuthenticated,
      //CSVIMPORTLOG
      createCSVImportLog: isAuthenticated,
      updateCSVImportLog: isAuthenticated,
      deleteCSVImportLog: isAuthenticated,
      //ATTENDANCE
      createAttendance: isAuthenticated,
      updateAttendance: isAuthenticated,
      deleteAttendance: isAuthenticated,
      //REQUEST
      createRequest: isAuthenticated,
      updateRequest: isAuthenticated,
      deleteRequest: isAuthenticated,
      //ELSE
      login: allow,
    },
  },
  {
    // Cho phép mặc định truy cập vào các trường hợp không quy định rõ quyền hạn
    fallbackRule: allow,
  }
);

module.exports = permissions;
