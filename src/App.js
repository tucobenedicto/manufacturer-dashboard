import React, { Component } from 'react';
import './App.scss';

import AppBody from './components/AppBody.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBody />
      </div>
    );
  }
}

export default App;
