const express = require('express');
const path = require('path');

const app = express();
const port = 7878;

//zvolený jazyk
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'Views'));

app.use(express.static(path.join(__dirname, 'Web')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/odpocet', (req, res) => {
    const now = new Date();
    const cil = new Date();
    cil.setHours(15, 0, 0, 0);

    if (now >= cil) {
        cil.setDate(cil.getDate() + 1);
    }

    const rozdilMs = cil - now;

    const hodiny = Math.floor(rozdilMs / (1000 * 60 * 60));
    const minuty = Math.floor((rozdilMs % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((rozdilMs % (1000 * 60)) / 1000);

    const cas = [hodiny, minuty, sekundy]
        .map(cislo => String(cislo).padStart(2, '0'))
        .join(':');

    res.render('odpocet', { cas });   // ← druhý argument posílá "cas" do šablony
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});