const session = require('express-session');
const model = require('../models/usersModel.js');

exports.signForm = (req, res) => {
    if (req.session.prihlasenyUzivatel) {
        res.redirect('/users/profile');
    } else {
        res.render('users', {
            titulek: 'Uživatelé',
        });
    }
}

exports.process = (req, res) => {
    const jmeno = req.body.jmeno;
    const heslo = req.body.heslo;

    if (model.existuje(jmeno)) {
        // kontrola hesla
        if (model.overitHeslo(jmeno, heslo)) {
            // prihlaseni uzivatele
            req.session.prihlasenyUzivatel = jmeno;
            res.redirect('/users/profile');
        } else {
            // spatne heslo pri prihlaseni
            res.redirect('/users');
        }
    } else {
        // registrace uzivatele
        model.pridatUzivatele(jmeno, heslo);
        res.redirect('/users/profile');
    }
}

exports.profile = (req, res) => {
    if (req.session.prihlasenyUzivatel) {
        res.render('profile', {
            titulek: req.session.prihlasenyUzivatel,
            jmeno: req.session.prihlasenyUzivatel,
        });
    } else {
        res.redirect('/users');
    }
}

exports.signout = (req, res) => {
    console.log('SIGNOUT FUNKCE SE SPUSTILA');

    req.session.destroy((err) => {
        if (err) {
            console.error('CHYBA SIGNOUT:', err);
            return res.status(500).send('Chyba při odhlášení.');
        }

        console.log('ODHLÁŠENÍ PROBĚHLO');
        res.redirect('/index');
    });
};