import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMain: true,
      showRecur: true,
      showWeekly: true,
      showMonthly: false,
      showYearly: false,
      showSkips: true,
      showSkipFreq: false,
      name: '',
      period: null,
    }
  }

  render() {
    return (
      <div id="border" style={{width: "100%", background:"gray", border:"1px solid black"}}>
        <h4>Hi, I'm the Event Form!</h4>
          { this.state.showMain ?
            <Main />
            : null
          }
          { this.state.showRecur ?
            <Recur />
            : null
          }{ this.state.showWeekly ?
            <Weekly />
            : null
          }
          { this.state.showMonthly ?
            <Monthly />
            : null
          }
          { this.state.showYearly ?
            <Yearly />
            : null
          }
          { this.state.showSkips ?
            <Skips />
            : null
          }
          { this.state.showSkipFreq ?
            <SkipFreq />
            : null
          }
      </div>
    );
  }
}

// snipped from the div: , height:"500px"

class Main extends Component {
  render() {
    return(
      <div id="border" style={{width: "90%", background:"gray", border:"1px solid black"}}>
        <h4>Main</h4>
        <p>Name Text Box</p>
        <p>Type - Payment or Income Radio Buttons</p>
        <p>Amount in Dollars</p>
        <p>Recurring? Radio Buttons</p>

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
