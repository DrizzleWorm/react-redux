import React, { Component } from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      caption: props.caption,
      count: props.initValue || 0,
      onUpdate: f => f
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
    this.onUpdate(true);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
    this.onUpdate(false);
  }

  onUpdate(flag) {
    this.props.onUpdate(flag);
  }

  render() {
    return (
      <div>
        <button className="clickcounter-btn" onClick={this.increment}>+</button>
        <button className="clickcounter-btn" onClick={this.decrement}>-</button>
        <div className="clickcounter-count">
          {this.state.caption} Count: <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}

export default ClickCounter;