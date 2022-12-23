const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/index.ejs'));
});

app.get('/projects', (req, res) => {
    res.render(path.join(__dirname, 'views/projects.ejs'));
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, 'views/contact.ejs'));
});

app.listen(port, () => {console.log('listening on port', port);});