const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.2/shoegroupDB';

const db = mongoose.connect(mongoUri)
			.catch(err => {
				console.log(err)
			});

// require('./seed.js');

module.exports = db;