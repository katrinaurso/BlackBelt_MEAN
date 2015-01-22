var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	templatePath = path.normalize(__dirname + '/../server/mailer/templates'),
	notifier = {
		service: 'postmark',
		APN: false,
		email: false,
		actions: ['comment'],
		tplPath: templatePath,
		key: 'POSTMARK_KEY',
		parseAppId: 'PARSE_APP_ID',
		parseApiKey: 'PARSE_MASTER_KEY'
	}
module.exports = {
	development: {
		db: 'mongodb://localhost/MEAN_BlackBelt',
		root: rootPath,
		notifier: notifier,
		app: {
			name: 'MEAN_BlackBelt'
		}
	},
	test: {
	    db: 'mongodb://localhost/MEAN_BalckBelt',
	    root: rootPath,
	    notifier: notifier,
	    app:{
	      name: 'MEAN_Blackbelt'
	    }
	},
	production: {}
}