const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Example endpoint
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
