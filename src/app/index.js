// instalace balicku s knihovnou Express
const express = require('express');
// vytvoreni aplikace
const app = express();

// zvoleny jazyk pro sablonovani
app.set('view engine', 'ejs');
// nastaveni slozky se sablonami
app.set('views', './app/views');

// misto se statickymi soubory (CSS, obrazky, ...)
app.use(express.static('./public'));

// zpracovani dynamickych URL provadi router
app.use(require('./routes/defaultRouter'));

// vystaveni aplikace pro pouziti v server.js
module.exports = app;