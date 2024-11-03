require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { applyMiddleware } = require("graphql-middleware");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { verifyToken } = require("./JWT/JWTAction");
const permissions = require("./middlewares/permissions");

const app = express();

// PORT OF SERVER
const port = process.env.PORT || 8080;

// CONNECT & SYNCHRONIZE DATABASE
const database = require("./config/database");
require("./models");
database.connect();

// LOADING SCHEMA & RESOLVERS
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const api = require("./API");

const startServer = async () => {
  // Tạo schema từ typeDefs và resolvers
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // Áp dụng middleware permissions vào schema
  const schemaWithMiddleware = applyMiddleware(schema, permissions);

  // Khởi tạo ApolloServer với schema đã có middleware
  const server = new ApolloServer({
    schema: schemaWithMiddleware, // Sử dụng schema có middleware
    context: ({ req }) => {
      const token = req.headers["authorization"]?.split(" ")[1];
      let user = null;

      if (token) {
        try {
          user = verifyToken(token);
        } catch (error) {
          console.error("Invalid token:", error);
          throw new Error("Unauthorized"); // Đẩy lỗi nếu token không hợp lệ
        }
      }
      return { api, user };
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(
      `Example app listening on port http://localhost:${port}${server.graphqlPath}`
    );
  });
};

// Gọi hàm khởi động server
startServer().catch((error) => {
  console.error("Error starting server:", error);
});
