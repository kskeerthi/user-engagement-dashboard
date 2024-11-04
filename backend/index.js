const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;

// CORS options to allow multiple origins
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Allow both origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true,
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Sample user engagement data (mock data)
const users = Array.from({ length: 100 }, (_, i) => ({
  userId: `user_${i}`,
  age: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
  location: 'Country ' + (i % 10),
  device: ['Mobile', 'Desktop', 'Tablet'][Math.floor(Math.random() * 3)],
  sessions: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
    sessionId: `session_${Math.random().toString(36).substr(2, 9)}`,
    startTime: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    endTime: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    actions: ['viewed_product', 'clicked_ad', 'added_to_cart', 'made_purchase']
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 1)
  }))
}));

// Endpoint to get user engagement data
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
