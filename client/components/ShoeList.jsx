import React from 'react';
import Search from './Search';

const axios = require('axios');

class ShoeList extends React.Component {
  constructor() {
    super();
    this.state = { 
      shoeID: "" };
  }

  componentDidMount() {

  }

  render() {
    const { images } = this.state;
    return (
      <div className="shoe-gallery">
        <div className="shoe-grid">
          <ImageGrid imgs={images} />
        </div>
      </div>
    );
  }
}

export default ShoeList;