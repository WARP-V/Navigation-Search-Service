const express = require('express');
// const morgan = require('morgan');
const db = require('../database-mongodb/index.js');
const ShoeGroup = require('../database-mongodb/ShoeGroup.js');

const path = require('path');
const app = express();
const port = process.env.PORT || 3002;


// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


//server routes

app.get('/shoes/:shoeID', ({ params }, res) => {
  const id = params.shoeID;
  const shoeID = id.substring(1, id.length);
  Shoe.find({ shoeID }, (err, shoe) => {
    if (err) {
      console.log(err);
    }
    res.send(shoe);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
