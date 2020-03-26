const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));

app.listen(PORT, () => console.log('Listening on port', PORT));






module.export=app;
