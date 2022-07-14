const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

const config  =  require('./config/index')

const url = config.url;
const id = config.id;
const password = config.password;
const database = config.database;
const port = config.port

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
        console.log(res)
        console.log(_)
             resolve(res);
        }, (err) => {
            reject(err)
        })  
    })
}

module.exports = {
    query
}