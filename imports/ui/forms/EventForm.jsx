import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, Col, Checkbox, Radio } from 'react-bootstrap';


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
        <div className="form-group ">
         <label className="control-label col-sm-4" htmlhtmlhtmlFor="name">
          Name
         </label>
         <div className="col-sm-4">
            <input className="form-control" id="name" name="name" type="text"/>
           </div>
          </div>
          <div className="form-group" id="type">
           <label className="control-label col-sm-4 requiredField" htmlhtmlFor="radio">

           </label>
           <div className="col-sm-8">
            <label className="radio-inline">
             <input name="radio" type="radio" id="type_payment" value="Payment"/>
             Payment
            </label>
          <label className="radio-inline">
           <input name="radio" type="radio" id="type_income" value="Income"/>
           Income
          </label>
          <span className="help-block" id="hint_radio">

          </span>
         </div>
        </div>
        <div className="form-group ">
         <label className="control-label col-sm-4 requiredField" htmlhtmlFor="number">
          Amount
         </label>
         <div className="col-sm-4">
          <div className="input-group">
           <div className="input-group-addon">
            $
           </div>
           <input className="form-control" id="amount" name="number" placeholder="250" type="text"/>
           <div className="input-group-addon">
            .00
           </div>
          </div>
         </div>
        </div>
        <div className="form-group">
         <label className="control-label col-sm-4 requiredField" htmlhtmlFor="radio1">

         </label>
         <div className="col-sm-8 " id="toggle_recur">
          <label className="radio-inline">
           <input name="radio1" type="radio" id="recur_off" value="false"/>
           One Time
          </label>
          <label className="radio-inline">
           <input name="radio1" type="radio" id="recur_on" value="true"/>
           Repeating
          </label>
          <span className="help-block" id="hint_recur">
           Select 'Repeating' if this item occurs on a regular basis.
          </span>
         </div>
        </div>
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
