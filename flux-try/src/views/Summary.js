import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore.js';
import './Summary.css';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    console.log('count', SummaryStore.getSummary());
    this.state = {
      count: SummaryStore.getSummary()
    }
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onChange);
  }

  onChange() {
    const newCount = SummaryStore.getSummary();
    this.setState({
      count: newCount
    });
  }

  render() {
    return (
      <div>
        Total: <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Summary;