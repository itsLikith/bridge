import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Assets service is running on http://localhost:${PORT}`);
  console.log(`Assets service is running on http://assets.bridge.com`);
});