const express = require('express');
const path = require('path');

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

app.listen(3000, () => {console.log('listening on port 3000');});