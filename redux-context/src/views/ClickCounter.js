import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Action.js';
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
  constructor(props, context) {
    super(props, context);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.counterCaption]
    }
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  increment() {
    this.context.store.dispatch(Actions.increment(this.props.counterCaption));
  }

  decrement() {
    this.context.store.dispatch(Actions.decrement(this.props.counterCaption));
  }
  
  render() {
    return <Counter caption={this.props.caption} increment={this.increment} decrement={this.decrement} value={this.state.value}/>
  }
}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer;