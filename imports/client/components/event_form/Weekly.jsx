import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';

export default class Weekly extends Component {
  render() {
    return(
      <FormGroup controlId="ev_DayOfWeek">
        <Col componentClass={ControlLabel} sm={4}>
          Day(s) of Week?
        </Col>
        <Col sm={3}>
          <FormControl componentClass="select" placeholder="Monday">
            <option value="Monday">
             Monday
            </option>
            <option value="Tuesday">
             Tuesday
            </option>
            <option value="Wednesday">
             Wednesday
            </option>
            <option value="Thursday">
             Thursday
            </option>
            <option value="Friday">
             Friday
            </option>
            <option value="Saturday">
             Saturday
            </option>
            <option value="Sunday">
             Sunday
            </option>
          </FormControl>
        </Col>
      </FormGroup>
    );
  }
}
