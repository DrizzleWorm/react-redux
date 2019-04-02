import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Summary.css';

class Summary extends Component {
  render() {
    const {sum} = this.props;
    return (
      <div>
        Total: <span>{sum}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {
    sum: sum
  }
}

export default connect(mapStateToProps)(Summary);