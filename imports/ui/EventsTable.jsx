import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Panel, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

import { Events } from '../api/events.js';

import ReactDOM from 'react-dom';
import Event from './Event.jsx';
import EventModal from './EventModal.jsx';

// Task component - represents a single debit or credit account
class EventsTable extends Component {


  // getEvents() {
  //   return [
  //     { _id: 1, name: 'Car Payment', amount: 500, type: 'Expense', frequency: 'Once a month' },
  //     { _id: 2, name: 'House Payment', amount: 1150, type: 'Expense', frequency: 'Once a month' },
  //     { _id: 3, name: 'Paycheck', amount: 2200, type: 'Income', frequency: 'Twice a month' },
  //     { _id: 4, name: 'Cell Phone', amount: 150, type: 'Expense', frequency: 'Once a week' },
  //     { _id: 5, name: 'Utilities', amount: 225, type: 'Expense', frequency: 'Every other month' },
  //     { _id: 6, name: 'Groceries', amount: 200, type: 'Expense', frequency: 'Every other week' },
  //
  //   ];
  // }

  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }

  render() {
    openEventModal = this.props.openEventModal;
    const title = (
      <h4>Recurring Events</h4>
    );
    return (
      <div>
        <Col md={12}>
          <Panel header={title}>
            <Table striped condensed hover>
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
                    <ButtonToolbar>
                      <Button className="pull-right" bsStyle="primary" bsSize="xsmall" onClick={openEventModal}>
                        <Glyphicon glyph="plus" /> Add
                      </Button>
                    </ButtonToolbar>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel>
        </Col>
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
