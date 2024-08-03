const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const path = require('path');
const Contact = require('./Contact.js')

const app = express();
app.use(Contact)
const port = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
