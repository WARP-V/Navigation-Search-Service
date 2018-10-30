import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Toolbar from './components/Toolbar.jsx'

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
        <Toolbar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('navbar'));