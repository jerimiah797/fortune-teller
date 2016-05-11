import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

import { Events } from '../api/events.js';

export default class Event extends Component {

  deleteThisEvent() {
    Events.remove(this.props.event._id);
  }

  occurrences() { //unused so far
    return this.props.event.dates.length;
  }

  formatPeriod(period, skips) {   //unused so far
    if (period == 'month') {
      if (skips == 0) {
        //console.log(this.occurrences());
        if (this.occurrences() == 1) {
          return "Once a Month";
        } else {
          s = this.occurrences()+" times a Month";
          return s;
        }
      }
      else {
        s = "Every "+(skips+1)+" Months";
        return s;
      }
    }
  }



  render() {
    deleteThisEvent = this.deleteThisEvent.bind(this);

    return (
      <tr>
        <td>{this.props.event.name}</td>
        <td>{this.props.event.amount}</td>
        <td>{this.props.event.type}</td>
        <td>{this.props.event.recurDescription}</td>
        <td>{this.props.event.dates.toString()}</td>
        <td>
          <ButtonToolbar>
            <Button className="pull-right" bsStyle="danger" bsSize="xsmall" value="delete" onClick={deleteThisEvent}>
              <Glyphicon glyph="remove" />
            </Button>
            <Button className="pull-right" bsStyle="warning" bsSize="xsmall" value="edit" onClick={this.props.open}>
              <Glyphicon glyph="pencil" />
            </Button>
          </ButtonToolbar>
        </td>
      </tr>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};
