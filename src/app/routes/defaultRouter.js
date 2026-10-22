// vytvoreni routeru (expressova miniaplikace)
const router = require('express').Router();

// reakce na custom URL, ktere server obsluhuje
router.get(['/', '/index'], (req, res) => {
	res.render('index', {
		titulek: 'Nový zaměstanec',
		jmeno: 'Miroslav Greguš',
		cas: new Date(),
	});
});

router.get('/odpocet', (req, res) => {
	res.render('odpocet');
});

router.get('/kontakt', (req, res) => {
	res.render('kontakt');
});

router.get('/sluzby', (req, res) => {
	res.render('sluzby');
});

router.get('/items', (req, res) => {
	res.render('items', {
		titulek: 'Články',
		clanky: model.nacistClanky(),
	});
});

// odchyceni neznamych URL
router.use((req, res) => {
	res.render('error');
});



// export kodu routeru do hlavni aplikace
module.exports = router;