import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: []
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">
            SEARCH
          </span>
      	</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('navSearch'));