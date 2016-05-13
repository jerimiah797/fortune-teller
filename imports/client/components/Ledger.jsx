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

// Ledger component - holds a table of calculated ledger entries
class EventsTable extends Component {
  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }

  render() {
    //this.populatedb();
    const title = (
      <h4>Ledger</h4>
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
                  <th>Date</th>
                  <th>Balance</th>
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
                  <td> </td>
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
