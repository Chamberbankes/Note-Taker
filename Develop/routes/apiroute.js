const express = require('express');
const fb = express.Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


fb.get('/notes', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


fb.post('/notes', (req, res) => {
const { title, text } = req.body;
if (title && text) {

const newNote = {
title,
text,
id: uuid(),
};

readAndAppend(newNote, './db/db.json');
const response = {
status: 'success',
body: newNote,
};

res.json(response);
} else {
res.json('Error in posting note');
}
});


module.exports = fb;
