import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';


export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecur: true,
      showWeekly: false,
      showMonthly: true,
      showYearly: false,
      showSkips: true,
      showSkipFreq: true,
      name: '',
      period: null,
    }
  }

  render() {
    return (
      <Form horizontal>
        <Main />
        { this.state.showRecur ?
          <Recur
            showWeekly={this.state.showWeekly}
            showMonthly={this.state.showMonthly}
            showYearly={this.state.showYearly}
            showSkips={this.state.showSkips}
            showSkipFreq={this.state.showSkipFreq}
           />
          : null
        }
      </Form>
    );
  }
}

// snipped from the div: , height:"500px"

class Main extends Component {
  render() {
    return(
      <div>
        <FormGroup controlId="ev_Name">
          <Col componentClass={ControlLabel} sm={4}>
            Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Car Payment" />
          </Col>
        </FormGroup>

        <FormGroup controlId="ev_Type">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Radio inline>
              Payment
            </Radio>
            {' '}
            <Radio inline>
              Income
            </Radio>
          </Col>
        </FormGroup>

        <FormGroup controlId="ev_Amount">
          <Col componentClass={ControlLabel} sm={4}>
            Amount
          </Col>
          <Col sm={4}>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" placeholder="250"/>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup controlId="ev_Recur">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Radio inline>
              One Time
            </Radio>
            {' '}
            <Radio inline>
              Repeating
            </Radio>
            <HelpBlock>Select 'Repeating' if this item occurs on a regular basis.</HelpBlock>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

class Recur extends Component {
  render() {
    return(
      <div>
        <FormGroup controlId="ev_Period">
          <Col componentClass={ControlLabel} sm={4}>
            Every
          </Col>
          <Col sm={6}>
            <Radio inline>
              Weekly
            </Radio>
            {' '}
            <Radio inline>
              Monthly
            </Radio>
            {' '}
            <Radio inline>
              Yearly
            </Radio>
          </Col>
        </FormGroup>

          { this.props.showWeekly ?
            <Weekly />
            : null
          }
          { this.props.showMonthly ?
            <Monthly />
            : null
          }
          { this.props.showYearly ?
            <Yearly />
            : null
          }
          { this.props.showSkips ?
            <Skips />
            : null
          }
          { this.props.showSkipFreq ?
            <SkipFreq />
            : null
          }
      </div>
    );
  }
}

class Weekly extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Weekly</h4>
        <p>Selector for Day of the Week</p>

      </div>
    );
  }
}

class Monthly extends Component {
  render() {
    return(
      <div>
        <FormGroup controlId="ev_DayOfMonth">
          <Col componentClass={ControlLabel} sm={4}>
            Date(s) of Month?
          </Col>
          <Col sm={3}>
            <FormControl componentClass="select" placeholder="0">
              <option value="0">
                Pick a date
              </option>
              <option value="1">
              1
              </option>
              <option value="2">
              2
              </option>
              <option value="3">
              3
              </option>
              <option value="4">
              4
              </option>
              <option value="5">
              5
              </option>
              <option value="6">
              6
              </option>
              <option value="7">
              7
              </option>
              <option value="8">
              8
              </option>
              <option value="9">
              9
              </option>
              <option value="10">
              10
              </option>
              <option value="11">
              11
              </option>
              <option value="12">
              12
              </option>
              <option value="13">
              13
              </option>
              <option value="14">
              14
              </option>
              <option value="15">
              15
              </option>
              <option value="16">
              16
              </option>
              <option value="17">
              17
              </option>
              <option value="18">
              18
              </option>
              <option value="19">
              19
              </option>
              <option value="20">
              20
              </option>
              <option value="21">
              21
              </option>
              <option value="22">
              22
              </option>
              <option value="23">
              23
              </option>
              <option value="24">
              24
              </option>
              <option value="25">
              25
              </option>
              <option value="26">
              26
              </option>
              <option value="27">
              27
              </option>
              <option value="28">
              28
              </option>
              <option value="29">
              29
              </option>
              <option value="30">
              30
              </option>
              <option value="31">
              31
              </option>
            </FormControl>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

class Yearly extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Yearly</h4>
        <p>Selector for Month of the Year</p>
        <p>Selector for Date of the Month</p>
      </div>
    );
  }
}

class Skips extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Skips</h4>
        <p>Checkbox to enable skipping weeks</p>
      </div>
    );
  }
}

class SkipFreq extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>SkipFreq</h4>
        <p>Conditionally hidden input for skip_freq</p>
      </div>
    );
  }
}
