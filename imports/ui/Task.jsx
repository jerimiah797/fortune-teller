import React, { Component, PropTypes } from 'react';

// Task component - represents a single debit or credit account
export default class Event extends Component {
  render() {
    return (
      <li>{this.props.event.text}</li>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};
