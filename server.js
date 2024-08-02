const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/images', express.static(path.join(__dirname, '../images')));
// API endpoint example
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
