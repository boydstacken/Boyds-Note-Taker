//Imported express package
const { v4: uuidv4 } = require('uuid');

const express = require('express')
const path = require('path')
const fs = require('fs')

const db = require('./db/db.json')
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /index or /routes'));

app.get('/index', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/api/notes', (req, res) => res.json(db))

app.post('/api/notes', (req, res) => {
 const savedNotes = db
 const newNotes = req.body
 savedNotes.push(newNotes)
fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes))
res.status(200).json(savedNotes)
})

app.listen(PORT, () => console.log(`Note Taker listening at http://localhost:${PORT}`));