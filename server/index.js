const express = require('express');
const path = require('path');

const app = express();

app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log('Listening on port', PORT));

module.export=app;
