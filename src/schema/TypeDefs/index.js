const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Token {
    FullName: String
    Email: String!
    Status: String
    State: String!
    Token: String!
  }
  type Role {
    RoleID: ID!
    RoleName: String
    Description: String
    State: String!
    createdAt: String!
    updatedAt: String!
    Users: [User]
  }
  type User {
    UserID: ID!
    FullName: String
    Email: String!
    Role: Role
    GoogleID: String
    Status: String
    State: String!
    createdAt: String!
    updatedAt: String!
    Requirements: [Request]
    Requests_processed: [Request]
    Attendances: [Attendance]
    Payrolls: [Payroll]
    Approved_payroll: [Payroll]
  }
  type Shift {
    ShiftID: ID!
    ShiftName: String!
    StartTime: String!
    EndTime: String!
    Description: String
    State: String!
    createdAt: String!
    updatedAt: String!
    Attendances: [Attendance]
  }
  type RequestType {
    RequestTypeID: ID!
    RequestTypeName: String!
    Description: String
    State: String!
    createdAt: String!
    updatedAt: String!
    Requests: [Request]
  }
  type Payroll {
    PayrollID: ID!
    User: User
    MonthYear: String!
    BaseSalary: Float!
    OvertimeHours: Float
    TotalSalary: Float!
    ApprovedBy: User
    State: String!
    createdAt: String!
    updatedAt: String!
  }
  type CSVImportLog {
    LogID: ID!
    ImportedBy: User
    ImportDate: String!
    FilePath: String!
    Status: String!
    State: String!
    createdAt: String!
    updatedAt: String!
  }
  type Attendance {
    AttendanceID: ID!
    User: User
    Shift: Shift
    AttendanceDate: String!
    Status: String!
    OvertimeHours: Float
    State: String!
    createdAt: String!
    updatedAt: String!
  }
  type Request {
    RequestID: ID!
    User: User
    RequestType: RequestType
    RequestDate: String
    Status: String!
    Description: String
    ApprovedBy: User
    State: String!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = typeDefs;
