const { gql } = require("apollo-server-express");

const mutation = gql`
  type Mutation {
    #Role
    createRole(RoleName: String, Description: String, State: String): Role
    updateRole(
      RoleID: ID!
      RoleName: String
      Description: String
      State: String
    ): String
    deleteRole(RoleID: ID!): String
    #User
    createUser(
      FullName: String
      Email: String!
      RoleID: ID!
      GoogleID: String
      Status: String
      State: String
    ): User
    updateUser(
      UserID: ID!
      FullName: String
      Email: String
      RoleID: ID
      GoogleID: String
      Status: String
      State: String
    ): String
    deleteUser(UserID: ID!): String
    #Shift
    createShift(
      ShiftName: String!
      StartTime: String!
      EndTime: String!
      Description: String
      State: String
    ): Shift
    updateShift(
      ShiftID: ID!
      ShiftName: String
      StartTime: String
      EndTime: String
      Description: String
      State: String
    ): String
    deleteShift(ShiftID: ID!): String
    #RequestTypes
    createRequestType(
      RequestTypeName: String!
      Description: String
      State: String
    ): RequestType
    updateRequestType(
      RequestTypeID: ID!
      RequestTypeName: String
      Description: String
      State: String
    ): String
    deleteRequestType(RequestTypeID: ID!): String
    #Payroll
    createPayroll(
      UserID: ID!
      MonthYear: String!
      BaseSalary: Float!
      OvertimeHours: Float
      TotalSalary: Float!
      ApprovedBy: ID!
      State: String
    ): Payroll
    updatePayroll(
      PayrollID: ID!
      UserID: ID
      MonthYear: String
      BaseSalary: Float
      OvertimeHours: Float
      TotalSalary: Float
      ApprovedBy: ID
      State: String
    ): String
    deletePayRoll(PayrollID: ID!): String
    #CSVImportLog
    createCSVImportLog(
      ImportedBy: ID!
      FilePath: String!
      Status: String!
      State: String
    ): CSVImportLog
    updateCSVImportLog(
      LogID: ID!
      ImportedBy: ID
      FilePath: String
      Status: String
      State: String
    ): String
    deleteCSVImportLog(LogID: ID!): String
    #Attebdance
    createAttendance(
      UserID: ID!
      ShiftID: ID!
      AttendanceDate: String!
      Status: String!
      OvertimeHours: Float
      State: String
    ): Attendance
    updateAttendance(
      AttendanceID: ID!
      UserID: ID
      ShiftID: ID
      AttendanceDate: String
      Status: String
      OvertimeHours: Float
      State: String
    ): String
    deleteAttendance(AttendanceID: ID!): String
    #Requests
    createRequest(
      UserID: ID!
      RequestTypeID: ID!
      RequestDate: String
      Status: String!
      Description: String
      ApprovedBy: ID!
      State: String
    ): Request
    updateRequest(
      RequestID: ID!
      UserID: ID
      RequestTypeID: ID
      RequestDate: String
      Status: String
      Description: String
      ApprovedBy: ID
      State: String
    ): String
    deleteRequest(RequestID: ID!): String
    #Else
    login(GoogleID: ID!): Token
  }
`;

module.exports = mutation;
