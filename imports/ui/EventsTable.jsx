import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import ReactDOM from 'react-dom';
import Event from './Event.jsx';

// Task component - represents a single debit or credit account
class EventsTable extends Component {
  handleAddButtonClick() {
    console.log("pressed the Add button");
  }

  getEvents() {
    return [
      { _id: 1, name: 'Car Payment', amount: 500, type: 'Expense', frequency: 'Once a month' },
      { _id: 2, name: 'House Payment', amount: 1150, type: 'Expense', frequency: 'Once a month' },
      { _id: 3, name: 'Paycheck', amount: 2200, type: 'Income', frequency: 'Twice a month' },
      { _id: 4, name: 'Cell Phone', amount: 150, type: 'Expense', frequency: 'Once a week' },
      { _id: 5, name: 'Utilities', amount: 225, type: 'Expense', frequency: 'Every other month' },
      { _id: 6, name: 'Groceries', amount: 200, type: 'Expense', frequency: 'Every other week' },

    ];
  }

  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="header">
                <h4 className="title">Recurring Events</h4>

                <p className="category">Payments and Income that occurr on a regular schedule</p>
              </div>
                <table className="table table-striped table-hover table-condensed">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Frequency</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderEvents()}
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        <button type="button" className="add pull-right btn-primary btn-xs" id="show_form" onClick={this.handleAddButtonClick.bind(this)}>
                          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>



            </div>



          </div>
        </div>
      </div>
    );
  }
}

EventsTable.propTypes = {
  events: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    events: Events.find({}).fetch(),
  };
}, EventsTable);
