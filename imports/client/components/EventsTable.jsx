import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Panel, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { Events } from '../../api/events.js';

import ReactDOM from 'react-dom';
import Event from './Event.jsx';
import EventForm from './event_form/EventForm.jsx';

import * as actionCreators from '../actions/EventForm.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// Task component - represents a single debit or credit account
class EventsTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //   }
  //   this.close = this.close.bind(this);
  //   this.open = this.open.bind(this);
  // }
  //
  // close() {
  //   this.setState({ showModal: false });
  //   console.log("setting showModal to false");
  // }
  //
  // open() {
  //   this.setState({ showModal: true });
  //   console.log("setting showModal to true");
  // }


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

  // populatedb() {
  //   createdAt = new Date();
  //   if (Events.find().count() === 0) {
  //     console.log("repopulating events db")
  //     Events.insert({name: "Car Payment", amount: 500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[4], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Mortgage", amount: 1500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Cell Phone", amount: 200, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[6], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Car Insurance", amount:100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[12], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Gas", amount: 100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Paycheck", amount: 2500, type: "income", recurring: true, period: "month", createdAt: createdAt, dates:[5, 21], skips: 0, recurDescription: "Twice A Month" });
  //     Events.insert({name: "Internet", amount: 120, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[23], skips: 0, recurDescription: "Once A Month" });
  //     Events.insert({name: "Electric", amount: 90, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[10], skips: 1, recurDescription: "Every 2 Months" });
  //   }
  // }
  openAddEventModal() {
    console.info("Add button was clicked.");
    this.props.actions.showEventForm(true);
  }

  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }

  render() {
    //this.populatedb();
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
                  <MediaQuery minDeviceWidth={1224} component="th">
                    Period
                  </MediaQuery>
                  <MediaQuery minDeviceWidth={1224} component="th">
                    Dates
                  </MediaQuery>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderEvents()}
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <MediaQuery minDeviceWidth={1224} component="td" />
                  <MediaQuery minDeviceWidth={1224} component="td" />
                  <td>
                    <ButtonToolbar>
                      <Button className="pull-right" bsStyle="primary" bsSize="xsmall" onClick={this.openAddEventModal.bind(this)}>
                        <Glyphicon glyph="plus" /> Add
                      </Button>
                    </ButtonToolbar>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel>
        </Col>
        { this.props.visible ?
          <EventForm />
          : null
        }
      </div>
    );
  }
}

EventsTable.propTypes = {
  events: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { visible: state.eventForm.visible };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

//export default connect(mapStateToProps, mapDispatchToProps)(EventsTable);

export default createContainer(() => {
  return {
    events: Events.find({}).fetch(),
  };
}, connect(mapStateToProps, mapDispatchToProps)(EventsTable));
