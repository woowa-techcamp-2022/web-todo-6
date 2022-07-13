const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

const textContents = fs.readFileSync(path.join(__dirname, 'db-conn.txt'));

const parsed = JSON.parse(textContents);

const url = parsed.url;
const id = parsed.id;
const password = parsed.password;
const database = parsed.database;
const port = parsed.port


const pool = mysql.createPool({
    host: url,
    user: id,
    database,
    password,
    port
});

mysql.createConnection({
    host: url,
    user: id, 
    database,
    password,
    port
})


function query(queryString) {
    return new Promise((resolve, reject) => {
        pool.query(queryString, (_, res) => {
            resolve(res);
        })  
    })
}

module.exports = {
    query
}