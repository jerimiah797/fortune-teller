import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';

export default class Skips extends Component {
  render() {
    period = this.props.period;
    skipsEnabled = this.props.skipsEnabled;
    handleSkipCheckbox = this.props.handleSkipCheckbox;
    return(
        <FormGroup controlId="ev_SkipsEnabled">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Checkbox checked={skipsEnabled} onChange={handleSkipCheckbox}>
              <span style={{fontWeight: 'bold'}}>Less often than every {period}?</span>
            </Checkbox>
            <HelpBlock>Use this for things like 'every other {period}'</HelpBlock>
          </Col>
        </FormGroup>
    );
  }
}
