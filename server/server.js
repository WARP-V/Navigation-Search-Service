const express = require('express');
// const morgan = require('morgan');
const path = require('path');
// const db = require('../database-mongodb/index.js');
const ShoeGroup = require('../database-mongodb/ShoeGroup.js');

const app = express();
const port = process.env.PORT || 3002;


// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


// server routes to verify all the data
app.get('/shoes/:shoeID', ({ params }, res) => {
  // const shoeID = params.shoeID;
  const { shoeID } = params;
  ShoeGroup.ShoeGroup.find(shoeID, (err, shoe) => {
    if (err) {
      console.log(err);
    }
    console.log(shoe);
    res.send(shoe);
  });
});

// server routes for search or query
app.get('/search/:text', ({ params }, res) => {
  console.log('hello world');
  const query = params.text;
  ShoeGroup.searchShoes(query, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
