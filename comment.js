//create a web server
//create a web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comment', (req, res) => {
    res.send('Hello Comment!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//
