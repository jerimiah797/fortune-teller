import React, { Component } from 'react';
import { Bootstrap } from 'meteor/twbs:bootstrap';

// Task component - represents a single debit or credit account
export default class Hero extends Component {
  render() {
    return (
      <div className="starter-template">
        <h1>Welcome to Fortune Teller</h1>
        <p className="lead">Helping you see the future of your money.</p>
      </div>
    );
  }
}
