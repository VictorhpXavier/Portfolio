const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const mysql = require('mysql');
const router = express.Router();
require('dotenv').config();

//const con = require('./Dbconnection.js')
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

router.use(bodyParser.json());
router.use(cors()); // Enable CORS for all routes

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('adssa')
    console.log('Received data:', { name, email, message });

    const insertInfo = 'INSERT INTO Messages (name, email, text) VALUES (?, ?, ?)'
    con.query(insertInfo, [name, email, message], (err) => {
        if(err) {
            console.log(err)
            return res.status(500).json({ success: false, message: 'Error inserting data' });
        }

    // Send a response back to the client
    res.json({ success: true, message: 'Message received successfully' });
    })
   
});

module.exports = con;
module.exports = router;