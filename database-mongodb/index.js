const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/shoegroupDB';

const db = mongoose.connect(mongoUri);

module.exports = db;
