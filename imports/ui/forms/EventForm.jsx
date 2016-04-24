import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, Col, Checkbox } from 'react-bootstrap';


export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecur: false,
      showWeekly: true,
      showMonthly: true,
      showYearly: true,
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
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass="EventForm" sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass="EventForm" sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

class Recur extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Recur</h4>
        <p>Period Selector - Weekly, Monthly, Yearly</p>
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
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Monthly</h4>
        <p>Selector for Date of the Month</p>

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
