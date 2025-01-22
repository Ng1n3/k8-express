import express from 'express';
import os from 'os';

const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
  const helloMessage = `Hello from ${os.hostname()}`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.listen(PORT, () => {
  console.log(`Web server is listening on port ${PORT}`);
});
