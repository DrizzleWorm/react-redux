import React, { Component } from 'react';
import Counter from './ClickCounter';
import Summary from './Summary.js';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter counterCaption="First" />
        <Counter counterCaption="Second" />
        <Counter counterCaption="Third" />
        <hr/>
        <Summary  />
      </div>
    );
  }
}

export default ControlPanel;