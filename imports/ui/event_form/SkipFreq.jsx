import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';

export default class SkipFreq extends Component {
  render() {
    period = this.props.period;
    skipNum = this.props.skipNum;
    handleSkipNumChange = this.props.handleSkipNumChange;
    return(
      <div>
        <FormGroup controlId="ev_NumberOfSkips">
          <Col componentClass={ControlLabel} sm={4}>
            How Often?
          </Col>
          <Col sm={4}>
            <InputGroup>
              <InputGroup.Addon>Every</InputGroup.Addon>
              <FormControl type="text" placeholder="2" value={skipNum} onChange={handleSkipNumChange}/>
              <InputGroup.Addon>{period}s</InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
      </div>
    );
  }
}
