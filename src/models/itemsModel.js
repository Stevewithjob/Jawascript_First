// nacteni kodu balicku simple-json-db
const jsondb = require('simple-json-db');
// pripojeni souboru s daty
const db = new jsondb('../data/items.json');

// poskytovane funkce pro praci s clanky
exports.nacistClanky = () => {
    // nacteni vsech dat z datoveho souboru
    return db.JSON();
}