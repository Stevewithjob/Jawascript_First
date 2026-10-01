// vytvoreni routeru (expressova miniaplikace)
const router = require('express').Router();

// reakce na custom URL, ktere server obsluhuje
router.get(['/', '/index'], (req, res) => {
	res.render('index');
});

// odchyceni neznamych URL
router.use((req, res) => {
	res.render('error');
});

// export kodu routeru do hlavni aplikace
module.exports = router;