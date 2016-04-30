import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';

export default class Yearly extends Component {
  render() {
    return(
      <FormGroup controlId="ev_MonthOfYear">
        <Col componentClass={ControlLabel} sm={4}>
          Month(s) of Year?
        </Col>
        <Col sm={3}>
          <FormControl componentClass="select" placeholder="January">
            <option value="January">
             January
            </option>
            <option value="February">
             February
            </option>
            <option value="March">
             March
            </option>
            <option value="April">
             April
            </option>
            <option value="May">
             May
            </option>
            <option value="June">
             June
            </option>
            <option value="July">
             July
            </option>
            <option value="August">
             August
            </option>
            <option value="September">
             September
            </option>
            <option value="October">
             October
            </option>
            <option value="November">
             November
            </option>
            <option value="December">
             December
            </option>
          </FormControl>
        </Col>
      </FormGroup>
    );
  }
}
