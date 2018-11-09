const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo/shoegroupDB';

const db = mongoose.connect(mongoUri)
			.catch(err => {
				console.log(err)
			});

require('./seed.js');

module.exports = db;