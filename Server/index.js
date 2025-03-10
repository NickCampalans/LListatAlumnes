
alumnes = [{nom: "Pere", edat: "15"}, {nom: "Maria", edat: "16"}];

const express = require('express');

const app = express();

app.use(express.static('www/browser'));

app.get('/api/', (req, res) => {
    res.sent('Hello World!');
});

app.get('/api/alumnes', (req, res) => {
    res.send(JSON.stringify(alumnes));
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});