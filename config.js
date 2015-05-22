module.exports = {
	db : {
				dbuser 	: 	process.env.DBUSER 			|| require('./creds.json').database.dbuser,
				dbpwd  	: 	process.env.DBPWD 			|| require('./creds.json').database.dbpwd,
				dburl  	: 	process.env.DBURL 			|| require('./creds.json').database.dburl,
	},
	facebook : {
				secret 	: 	process.env.FBSECRET 		|| require('./creds.json').facebook.secret,
				cKey		: 	process.env.FBCKEY 			|| require('./creds.json').facebook.cKey,
				cSecret	: 	process.env.FBCSECRET 	|| require('./creds.json').facebook.cSecret,
	},
};
