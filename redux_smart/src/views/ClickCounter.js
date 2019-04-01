import React, { Component } from 'react';
import * as Actions from '../Action.js';
import store from '../Store.js';
import './ClickCounter.css';

class Counter extends Component {
  render() {
    const {caption, increment, decrement, value} = this.props;
    return (
      <div>
        <button className="clickcounter-btn" onClick={increment}>+</button>
        <button className="clickcounter-btn" onClick={decrement}>-</button>
        <div className="clickcounter-count">
          {caption} Count: <span>{value}</span>
        </div>
      </div>
    );
  }
}

class CounterContainer extends Component {
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
    return <Counter caption={this.props.caption} increment={this.increment} decrement={this.decrement} value={this.state.value}/>
  }
}

export default CounterContainer;