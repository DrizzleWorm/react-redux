import React, { Component } from 'react';
import Counter from './ClickCounter';
import './ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.initValues = [10, 5, 20];
    const initSum = this.initValues.reduce((a, b) => a + b, 0);
    this.state = {
      sum: initSum
    }
  }

  onCounterUpdate(flag) {
    this.setState({
      sum: flag ? this.state.sum + 1 : this.state.sum - 1
    });
  }

  render() {
    return (
      <div>
        <Counter initValue={this.initValues[0]} caption="First" onUpdate={this.onCounterUpdate} />
        <Counter initValue={this.initValues[1]} caption="Second" onUpdate={this.onCounterUpdate} />
        <Counter initValue={this.initValues[2]} caption="Third" onUpdate={this.onCounterUpdate} />
        <div className="control-sum">total: {this.state.sum}</div>
      </div>
    );
  }
}

export default ControlPanel;