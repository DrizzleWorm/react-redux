import React, { Component } from 'react';
import CounterStore from '../stores/CounterStore.js';
import * as Actions from '../Action.js';
import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      count: CounterStore.getCounterValues()[props.counterCaption]
    }
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.counterCaption];
    this.setState({
      count: newCount
    });
  }

  increment() {
    Actions.increment(this.props.counterCaption);
  }

  decrement() {
    Actions.decrement(this.props.counterCaption);
  }

  render() {
    const {caption} = this.props;
    return (
      <div>
        <button className="clickcounter-btn" onClick={this.increment}>+</button>
        <button className="clickcounter-btn" onClick={this.decrement}>-</button>
        <div className="clickcounter-count">
          {caption} Count: <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}

export default ClickCounter;