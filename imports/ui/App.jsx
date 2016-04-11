import React, { Component } from 'react';

import Task from './Task.jsx';

// App component - represents the whole App
export default class App extends Component {
  getEvents() {
    return [
      { _id: 1, text: 'Car Payment' },
      { _id: 2, text: 'House Payment' },
      { _id: 3, text: 'Paycheck' },
    ];
  }

  renderEvents() {
    return this.getEvents().map((event) => (
      <Task key={event._id} event={event} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Bills / Payments</h1>
        </header>

        <ul>
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}
