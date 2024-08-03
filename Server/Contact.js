const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const con = require('./Dbconnection.js')

const router = express.Router();
router.use(bodyParser.json());
router.use(cors()); // Enable CORS for all routes

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
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