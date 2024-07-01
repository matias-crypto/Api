const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const futbolistas = [
  { id: 1, nombre: 'Lionel Messi' },
  { id: 2, nombre: 'Cristiano Ronaldo' },
  
];

app.get('/api/futbolistas', (req, res) => {
  res.json(futbolistas);
});

app.get('/', (req, res) => {
  res.send('¡API básica de futbolistas! Accede a /api/futbolistas para ver la lista de futbolistas.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
