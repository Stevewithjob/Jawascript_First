const bcrypt = require('bcryptjs');
const jsondb = require('simple-json-db');
const db = new jsondb('../data/users.json');

exports.existuje = (jmeno) => {
    return db.has(jmeno);
}

exports.overitHeslo = (jmeno, heslo) => {
    if (db.has(jmeno)) {
        let data = db.get(jmeno);
        return bcrypt.compareSync(heslo, data.heslo);
    }
}

exports.pridatUzivatele = (jmeno, heslo) => {
    if (!db.has(jmeno)) {
        db.set(jmeno, {
            heslo: bcrypt.hashSync(heslo, 10),
        });
    }
}