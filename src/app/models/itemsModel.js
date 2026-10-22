// nacteni kodu balicku simple-json-db
const jsondb = require('simple-json-db');
// pripojeni souboru s daty
const db = new jsondb('../data/items.json');

// poskytovane funkce pro praci s clanky
exports.nacistClanky = () => {
    // nacteni vsech dat z datoveho souboru
    return db.JSON();
}

exports.pridatClanek = (nazev, obsah) => {
    let noveId = 1;

    let data = db.JSON();

    for (let i in data) {
        if (data[i].id >= noveId) {
            noveId = data[i].id + 1;
        }
    }

    data.push({
        id: noveId,
        nazev: nazev,
        obsah: obsah,
    });

    db.JSON(data);
    db.sync();
};

exports.smazatClanek = (id) => {
    let data = db.JSON();

    for (let i in data) {
        if (data[i].id == id) {
            data.splice(i, 1);
            db.JSON(data);
            return true;
        }
    }
    return false;
}