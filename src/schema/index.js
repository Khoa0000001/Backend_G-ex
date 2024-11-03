const typeDefs = require("./TypeDefs");
const query = require("./Query");
const mutation = require("./Mutation");

const schema = [typeDefs, query, mutation];

module.exports = schema;
