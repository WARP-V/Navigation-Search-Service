const db = require('../index.js');
const ShoeGroup = require('../ShoeGroup.js');

test('jest is working', () => {
  expect(1 + 2).toEqual(3);
});

describe('methods for the Shoe Group components', () => {
  test('insdert method - should insert a document(row) into collection (table)', async () => {
    const mockShoe = {shoeID: '555555-555', name: 'mockShoe', imageUrls: 'https://s3.amazonaws.com/warp-v/images/136027_148.jpeg', productGroup: 'Air Jordan Mid', searchStr: 'Air Jordan', price: '$555'};
    ShoeGroup.ShoeGroup.create(mockShoe);
    // const insertedShoe = ShoeGroup.findOne({shoeID: '555555-555'});
    let insertedShoe;
    ShoeGroup.ShoeGroup.findOne({shoeID: '555555-555'})
     .then((doc)=>{
        console.log(doc);
        insertedShoe = doc;
     }).then(() => {
        expect(insertedShoe.shoeID).toEqual(mockShoe.shoeID);
     }).catch((err)=>{
        console.log(err);
     });
  });
});