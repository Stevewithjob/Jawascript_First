// poskytovana funkcnost controlleru
// ...

exports.index = (req, res) => {
	res.render('index', {
		titulek: 'Můj web',
	});
}

exports.about = (req, res) => {
	res.render('about', {
		titulek: 'O aplikaci',
	});
}

exports.error = (req, res) => {
	res.render('error', {
		titulek: 'Chyba',
	});
}