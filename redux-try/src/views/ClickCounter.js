import React, { Component } from 'react';
import * as Actions from '../Action.js';
import store from '../Store.js';
import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.counterCaption]
    }
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  increment() {
    store.dispatch(Actions.increment(this.props.counterCaption));
  }

  decrement() {
    store.dispatch(Actions.decrement(this.props.counterCaption));
  }

  render() {
    const value = this.state.value;
    const {caption} = this.props;
    return (
      <div>
        <button className="clickcounter-btn" onClick={this.increment}>+</button>
        <button className="clickcounter-btn" onClick={this.decrement}>-</button>
        <div className="clickcounter-count">
          {caption} Count: <span>{value}</span>
        </div>
      </div>
    );
  }
}

export default ClickCounter;