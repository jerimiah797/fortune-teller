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

class EventsTable extends Component {

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
