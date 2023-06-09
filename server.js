//Imported express package
const { v4: uuidv4 } = require('uuid');

const express = require('express')
const path = require('path')
const fs = require('fs')

//Iniitalizes variables and sets up express server
const db = require('./db/db.json')
const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Set up for routes
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

//Starts the server
app.listen(PORT, () => console.log(`Note Taker listening at http://localhost:${PORT}`));