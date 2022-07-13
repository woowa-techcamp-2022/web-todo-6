require("dotenv").config();
module.exports = {
    "url": process.env.DB_URL,
    "id" : process.env.DB_ID,
    "password" : process.env.DB_PASSWORD,
    "database" : process.env.DB_DATABASE,
    "port" : process.env.DB_PORT,
}