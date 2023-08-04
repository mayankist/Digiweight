const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// POST request handler for your API endpoint
app.post('/api/data', (req, res) => {
  const dataArray = req.body.data;

  // Process the dataArray as needed
  console.log('Received data:', dataArray);

  // Respond with a success message
  res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
