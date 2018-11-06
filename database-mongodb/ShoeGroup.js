const mongoose = require('mongoose');
require('./index.js');

mongoose.promise = global.Promise;


const shoeGroupSchema = new mongoose.Schema({
  shoeID: { type: String, unique: true },
  name: String,
  imageUrls: [String],
  productGroup: String,
  searchStr: String,
  price: String, // no price calculation needed for shoe
},
{
  timestamps: true,
});

const ShoeGroup = mongoose.model('ShoeGroup', shoeGroupSchema);

const retrieveShoe = (shoeID, callback) => {
  ShoeGroup.find({ shoeID }, (error, docs) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, docs);
    }
  });
};

const retrieveAllShoeGroups = (callback) => {
  ShoeGroup.find((error, docs) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, docs);
  });
};

const searchShoes = (query, callback) => {
  ShoeGroup.find({ $text: { $search: query } }, (error, docs) => {
    // console.log('shoegroup------------>', query);
    if (error) {
      return callback(error, null);
    }
    // console.log('searchshoes---------', docs);
    return callback(null, docs);
  }).limit(6);
};

module.exports.ShoeGroup = ShoeGroup;
module.exports.retrieveShoe = retrieveShoe;
module.exports.retrieveAllShoeGroups = retrieveAllShoeGroups;
module.exports.searchShoes = searchShoes;
