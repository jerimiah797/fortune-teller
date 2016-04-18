import React, { Component, PropTypes } from 'react';

// Task component - represents a single debit or credit account
export default class Event extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.event.name}</td>
        <td>{this.props.event.amount}</td>
        <td>{this.props.event.type}</td>
        <td>{this.props.event.frequency}</td>
        <td>
          <button type="button" className="delete pull-right btn-danger btn-xs">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <button type="button" className="edit pull-right btn-warning btn-xs">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};
