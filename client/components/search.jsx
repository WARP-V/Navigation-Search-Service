import React from 'react';
import App from './App.jsx';
import ShoeList from './ShoeList.jsx';
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
    // this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    }); 
    this.searchShoes(e.target.value);
  }

  searchShoes(query) {  
    console.log(query);
    axios.get(`/Search/${query}`, {
        params: {
          text: query
        }
      })
      .then((resp) => {
        // console.log("resp", resp);
        const shoes = resp.data;
        console.log("shoes", shoes);
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

