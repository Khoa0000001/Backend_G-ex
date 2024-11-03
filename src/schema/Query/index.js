const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    #Role
    roles: [Role]
    role(RoleID: ID!): Role
    #User
    users: [User]
    user(UserID: ID!): User
    #Shift
    shifts: [Shift]
    shift(ShiftID: ID!): Shift
    #RequestTypes
    requestTypes: [RequestType]
    requestType(RequestTypeID: ID!): RequestType
    #Payroll
    payrolls: [Payroll]
    payroll(PayrollID: ID!): Payroll
    #CSVImportLog
    csvImportLogs: [CSVImportLog]
    csvImportLog(LogID: ID!): CSVImportLog
    #Attendance
    attendances: [Attendance]
    attendance(AttendanceID: ID!): Attendance
    #Request
    requests: [Request]
    request(RequestID: ID!): Request
    #Else
  }
`;

module.exports = query;
