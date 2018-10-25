const db  = require('./index.js');
const Blog = require('./ShoeGroup.js');

 shoeID: {type: String, unique: true},
 name: String,
 imageUrls: [String],
 productGroup: String,
 searchStr: String,
 price: String,

const samplePosts = [
  {
    shoeID: 'Chatty Cat Tells Long Yarn',
    name: 'Jordan Shoe Cat Style',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    productGroup: 'baseball shoes',
    searchStr: 'baseball',
    price: '$152'
    createdAt: '2017-11-14T05:57:26.037Z',
  },
  {
    shoeID: 'Jordan Shoe Cat Style 1',
    name: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    productGroup: 'baseball shoes',
    searchStr: 'baseball',
    price: '$152'
    createdAt: '2017-11-14T05:57:26.037Z',
  },
  {
    shoeID: 'Jordan Shoe Cat Style 2',
    name: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    productGroup: 'baseball shoes',
    searchStr: 'baseball',
    price: '$152'
    createdAt: '2017-11-14T05:57:26.037Z',
  },
  {
    shoeID: 'Jordan Shoe Cat Style 3',
    name: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    productGroup: 'baseball shoes',
    searchStr: 'baseball',
    price: '$152'
    createdAt: '2017-11-14T05:57:26.037Z',
  }
];

const insertSampleShoeGroups = function() {
  Blog.create(samplePosts)
    .then(() => db.disconnect());
};

insertSampleShoeGroups();