import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, InputGroup, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Checkbox, Radio } from 'react-bootstrap';
import Weekly from './Weekly.jsx';
import Monthly from './Monthly.jsx';
import Yearly from './Yearly.jsx';
import Skips from './Skips.jsx';
import SkipFreq from './SkipFreq.jsx';

export default class Recur extends Component {
  render() {
    period = this.props.period;
    showSkipCheckbox = this.props.showSkipCheckbox;
    skipsEnabled = this.props.skipsEnabled;
    skipNum = this.props.skipNum;
    handlePeriodChange = this.props.handlePeriodChange;
    handleSkipCheckbox = this.props.handleSkipCheckbox;
    handleSkipNumChange = this.props.handleSkipNumChange;
    return(
      <div>
        <FormGroup controlId="ev_Period">
          <Col componentClass={ControlLabel} sm={4}>
            Every
          </Col>
          <Col sm={6}>
            <Radio inline value="week" checked={(period == 'week') ? true : false} onChange={handlePeriodChange}>
              Week
            </Radio>
            {' '}
            <Radio inline value="month" checked={(period == 'month') ? true : false} onChange={handlePeriodChange}>
              Month
            </Radio>
            {' '}
            <Radio inline value="year" checked={(period == 'year') ? true : false} onChange={handlePeriodChange}>
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
          { (period != '') ?
            <Skips period={period} skipsEnabled={skipsEnabled} handleSkipCheckbox={handleSkipCheckbox}/>
            : null
          }
          { skipsEnabled ?
            <SkipFreq period={period} skipNum={skipNum} handleSkipNumChange={handleSkipNumChange}/>
            : null
          }
      </div>
    );
  }
}
