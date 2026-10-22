// pridani kodu modelu s clanky
const model = require('../models/itemsModel.js');

exports.zobrazitClanky = (req, res) => {
	res.render('items', {
		titulek: 'Články',
		clanky: model.nacistClanky(),
	});
}

exports.smazatClanek = (req, res) => {
	const id = req.params.id;

	model.smazatClanek(id);

	res.redirect('/items');
}

exports.pridatClanek = (req, res) => {
	const nazev = req.body.nazev;
	const obsah = req.body.obsah;

	model.pridatClanek(nazev, obsah);

	res.redirect('/items');
}