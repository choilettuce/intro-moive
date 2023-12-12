const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host : "localhost",
    port : 3306,
    database : "LFW",
    username : "LFW",
    password : "SeSAC4web!"
});

const getConn = async() => {
    return await pool.getConnection(async (conn) => conn);
};

const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen('5000', () => {
    console.log('5000');
});