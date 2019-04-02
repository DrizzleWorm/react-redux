import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class SummaryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState() {
    const state = this.context.store.getState();
    
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
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

  render() {
    return (
      <Summary sum={this.state.sum}/>
    );
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer;