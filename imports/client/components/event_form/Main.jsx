import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';

export default class Main extends Component {
  render() {
    name = this.props.name;
    type = this.props.type;
    amount = this.props.amount;
    recurring = this.props.recurring;
    handleNameChange = this.props.handleNameChange;
    handleTypeChange = this.props.handleTypeChange;
    handleAmountChange = this.props.handleAmountChange;
    handleRecurChange = this.props.handleRecurChange;
    return(
      <div>
        <FormGroup controlId="ev_Name">
          <Col componentClass={ControlLabel} sm={4}>
            Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Car Payment" value={name} onChange={handleNameChange} autoFocus/>
          </Col>
        </FormGroup>

        <FormGroup controlId="ev_Type">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Radio inline value="payment" checked={(type == 'payment') ? true : false} onChange={handleTypeChange}>
              Payment
            </Radio>
            {' '}
            <Radio inline value="income" checked={(type == 'income') ? true : false} onChange={handleTypeChange}>
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
              <FormControl type="text" placeholder="250" value={amount} onChange={handleAmountChange}/>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup controlId="ev_Recur">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Radio inline value="once" checked={!recurring} onChange={handleRecurChange}>
              One Time
            </Radio>
            {' '}
            <Radio inline value='recurring' checked={recurring} onChange={handleRecurChange}>
              Repeating
            </Radio>
            <HelpBlock>Select 'Repeating' if this item occurs on a regular basis.</HelpBlock>
          </Col>
        </FormGroup>
      </div>
    );
  }
}
