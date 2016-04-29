import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';


export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recurring: false,
      showSkips: true,
      showSkipFreq: true,
      name: '',
      type: 'payment',
      period: 'week',
      amount: '',
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

  render() {
    return (
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
            showSkips={this.state.showSkips}
            showSkipFreq={this.state.showSkipFreq}
            period={this.state.period}
           />
          : null
        }
      </Form>
    );
  }
}

class Main extends Component {
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
            <FormControl type="text" placeholder="Car Payment" value={name} onChange={handleNameChange}/>
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

class Recur extends Component {
  render() {
    var period = this.props.period;
    return(
      <div>
        <FormGroup controlId="ev_Period">
          <Col componentClass={ControlLabel} sm={4}>
            Every
          </Col>
          <Col sm={6}>
            <Radio inline>
              Week
            </Radio>
            {' '}
            <Radio inline>
              Month
            </Radio>
            {' '}
            <Radio inline>
              Year
            </Radio>
          </Col>
        </FormGroup>

          { (period == "week") ?
            <Weekly period={period}/>
            : null
          }
          { (period == "month") ?
            <Monthly period={period}/>
            : null
          }
          { (period == "year") ?
            <div>
              <Yearly period={period}/>
              <Monthly period={period}/>
            </div>
            : null
          }
          { this.props.showSkips ?
            <Skips period={period}/>
            : null
          }
          { this.props.showSkipFreq ?
            <SkipFreq period={period}/>
            : null
          }
      </div>
    );
  }
}

class Weekly extends Component {
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

class Monthly extends Component {
  render() {
    return(
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
    );
  }
}

class Yearly extends Component {
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

class Skips extends Component {
  render() {
    period = this.props.period;
    return(
        <FormGroup controlId="ev_SkipsEnabled">
          <Col componentClass={ControlLabel} sm={4}>

          </Col>
          <Col sm={6}>
            <Checkbox>
              <span style={{fontWeight: 'bold'}}>Less often than every {period}?</span>
            </Checkbox>
            <HelpBlock>Use this for things like 'every other {period}'</HelpBlock>
          </Col>
        </FormGroup>
    );
  }
}

class SkipFreq extends Component {
  render() {
    var period = this.props.period;
    return(
      <div>
        <FormGroup controlId="ev_NumberOfSkips">
          <Col componentClass={ControlLabel} sm={4}>
            How Often?
          </Col>
          <Col sm={4}>
            <InputGroup>
              <InputGroup.Addon>Every</InputGroup.Addon>
              <FormControl type="text" placeholder="2"/>
              <InputGroup.Addon>{period}s</InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
      </div>
    );
  }
}
