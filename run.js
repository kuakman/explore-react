var connect = require('connect'),
	compression = require('compression'),
	serveStatic = require('serve-static');

connect().use(compression())
	.use(serveStatic(__dirname + '/dist')).listen(9393);
