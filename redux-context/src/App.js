import React, { Component } from 'react';
import './App.css';
import ControlPanel from './views/ControlPanel.js';
import Provider from './Provider.js';
import store from './Store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );
  }
}

export default App;
