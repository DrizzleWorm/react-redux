import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.counterCaption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment: () => {
      dispatch(Actions.increment(ownProps.counterCaption))
    },
    decrement: () => {
      dispatch(Actions.decrement(ownProps.counterCaption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);