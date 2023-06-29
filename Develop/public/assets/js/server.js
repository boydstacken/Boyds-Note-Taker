const express = require('express')
const path = require('path')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /index or /routes'));

app.get('/index', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/index', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.listen(PORT, () => console.log('Note Taker listening at http://localhost:${PORT}'));