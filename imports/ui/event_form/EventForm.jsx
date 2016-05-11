import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio, Modal } from 'react-bootstrap';
import { Events } from '../../api/events.js';

import Main from './Main.jsx';
import Recur from './Recur.jsx';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.dates = new Array();
    this.state = {
      recurring: false,
      showSkipCheckbox: true,
      skipsEnabled: false,
      skipNum: '',
      name: '',
      type: 'payment',
      period: '',
      amount: '',
      dates: this.dates,
    }
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleTypeChange(e) {
    if (e.target.value != this.state.type) {
      (this.state.type == 'payment') ?
        this.setState({type: 'income'})
        : this.setState({type: 'payment'});
    }
  }

  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  }

  handleRecurChange(e) {
    if ((e.target.value == 'once') && (this.state.recurring)) {
      this.setState({recurring: !this.state.recurring})
    } else if ((e.target.value == 'recurring') && (!this.state.recurring)) {
      this.setState({recurring: !this.state.recurring})
    }
  }

  handlePeriodChange(e) {
    if(e.target.value != this.state.period) {
      this.setState({period: e.target.value});
    }
  }

  handleSkipCheckbox(e) {
    this.setState({skipsEnabled: !skipsEnabled});
  }

  handleSkipNumChange(e) {
    this.setState({skipNum: e.target.value});
    console.log(e.target.value);
  }

  handleDateChange(e) {

  }

  closeForm() {

  }

  handleSubmitEvent(e) {
    createdAt = new Date();
    console.log("adding an event")
    Events.insert({name: this.state.name, amount: this.state.amount, type: this.state.type, recurring: this.state.recurring, period: this.state.period, createdAt: createdAt, dates:[4], skips: 0, recurDescription: "Once A Month" });
    this.props.close;
  }

  render() {
    return (
      <Modal show={this.props.showModal}>
        <Modal.Header>
          <Modal.Title>Create an Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <Main
              name={this.state.name}
              type={this.state.type}
              amount={this.state.amount}
              recurring={this.state.recurring}
              handleNameChange={this.handleNameChange.bind(this)}
              handleTypeChange={this.handleTypeChange.bind(this)}
              handleAmountChange={this.handleAmountChange.bind(this)}
              handleRecurChange={this.handleRecurChange.bind(this)}
              />
            { this.state.recurring ?
              <Recur
                showSkipCheckbox={this.state.showSkipCheckbox}
                skipsEnabled={this.state.skipsEnabled}
                skipNum={this.state.skipNum}
                period={this.state.period}
                dates={this.state.dates}
                handlePeriodChange={this.handlePeriodChange.bind(this)}
                handleSkipCheckbox={this.handleSkipCheckbox.bind(this)}
                handleSkipNumChange={this.handleSkipNumChange.bind(this)}
                handleDatesChange={this.handleDateChange.bind(this)}
               />
              : null
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmitEvent.bind(this)}>Save</Button>
          <Button onClick={this.props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
