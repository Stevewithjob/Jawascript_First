// nacteni balicku dotenv (konfigurace aplikace souborem .env)
require('dotenv').config();

// vytvoreni jednoducheho HTTP serveru a predani rizeni aplikaci ve slozce app/
require('http')
    .createServer(require('./app'))
    .listen(process.env.PORT, () => {
        console.log(`Server běží na http://localhost:${process.env.PORT}`);
    });