if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}
const mongoClient = require("mongodb").MongoClient;

const connection = new mongoClient(process.env.DB_URL);

console.log(process.env.DB_URL);
async function getDBFunction() {
  await connection.connect();

  let db = connection.db("ASAP").collection("user");
  // db=db.collection('user');

  return db;
}

module.exports = { getDBFunction, connection };