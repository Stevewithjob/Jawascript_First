const express = require('express');
const path = require('path');

const app = express();
const port = 7878;

//zvolený jazyk
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'Views'));

app.use(express.static(path.join(__dirname, 'Web')));

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});