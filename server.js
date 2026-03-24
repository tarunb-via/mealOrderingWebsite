import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/restaurants', (req, res) => {
  res.json({
    restaurants: [
      { id: 'sunny-kitchen', name: 'Sunny Kitchen' },
      { id: 'garden-bowl', name: 'Garden Bowl Cafe' },
      { id: 'pasta-parlor', name: 'Pasta Parlor' },
    ],
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server listening on port 3001');
});
