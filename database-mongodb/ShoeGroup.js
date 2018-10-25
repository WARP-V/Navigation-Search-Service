const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.promise = global.Promise;


const shoeGroupSchema = new mongoose.Schema({
 shoeID: {type: String, unique: true},
 name: String,
 imageUrls: [String],
 productGroup: String,
 searchStr: String,
 price: String, //no price calculation needed for shoe
},
  {
  	 timestamps: true
  } 
);

 const ShoeGroup = mongoose.model('ShoeGroup', shoeGroupSchema);


 module.export = ShoeGroup;