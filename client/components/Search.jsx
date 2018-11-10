import React from 'react';
import App from './App';
import ShoeList from './ShoeList';
const axios = require('axios');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange(e) {
    this.setState({
      value: e.target.value
    }); 
    this.searchShoes(e.target.value);
  }

  searchShoes(query) {  
    axios.get(`/${query}/Search`, {
        params: {
          text: query
        }
      })
      .then((resp) => {
        const shoes = resp.data;
        this.setState( { shoes } );

      })
      .catch(function (err) {
        console.log(err);
    });  
  }
  render() {
    return (<div className="search-bar form-inline">
        <form>
        <input 
          className="global-search-input mod-ncss-input pt2-sm pr8-sm pl12-sm pb2-sm u-rounded" 
          type="text" autoComplete= "off" 
          value={this.state.value} 
          onChange={ this.handleInputChange}
        />
        </form>
         <ShoeList shoes={this.state.shoes}/> 
      </div>);
  }
}

export default Search;

