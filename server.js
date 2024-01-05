const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const apiKey = process.env.OPENAI_API_KEY || undefined;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const routes = require('./routes/apiRoutes.js');

// Serve the React app on all routes
app.get('*', (req, res) => {
  console.log('server.js get');
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// POST Routes
app.post('/getGPTResponse', routes.getGPTResponse);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});