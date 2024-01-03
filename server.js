const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY || undefined;

app.use(express.static(path.join(__dirname, 'client', 'build')));

const routes = require('./routes/apiRoutes.js');

// Serve the React app on all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// GET Routes
app.get('/getAPIKey', routes.getAPIKey);
app.get('getGPTResponse', routes.getGPTResponse);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});