import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ControlPanel from './views/ControlPanel.js';
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
