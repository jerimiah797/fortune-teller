import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class EventForm extends Component {
  // getInitialState() {
  //   return {author: '', text: ''};
  // }
  // whoops! only works for React.createClass
  // Use this for extending components
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
      period: 'Week',
    }
  }

  render() {
    return (
      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12 center-block">
         <form className="form-horizontal new-event" id="new-event" >
          <div className="form-group ">
           <label className="control-label col-sm-4" for="name">
            Name
           </label>
           <div className="col-sm-4">
              <input className="form-control" id="name" name="name" type="text"/>
             </div>
            </div>
            <div className="form-group" id="type">
             <label className="control-label col-sm-4 requiredField" for="radio">

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
           <label className="control-label col-sm-4 requiredField" for="number">
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
           <label className="control-label col-sm-4 requiredField" for="radio1">

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

          <RecurringFields />

          <div className="form-group">
           <div className="col-sm-8 col-sm-offset-4">
            <button className="btn btn-primary " name="submit" type="submit">
             Create New Event
            </button>
           </div>
          </div>
         </form>
        </div>
       </div>
      </div>
    );
  }
}

class RecurringFields extends Component {
  render() {
    return (
      <div>
        <div className="form-group" id="period">
         <label className="control-label col-sm-4" for="radio2">
          Every
         </label>
         <div className="col-sm-8">
          <label className="radio-inline">
           <input name="radio2" type="radio" id="period_week" value="Week"/>
           Week
          </label>
          <label className="radio-inline">
           <input name="radio2" type="radio" id="period_month" value="Month"/>
           Month
          </label>
          <label className="radio-inline">
           <input name="radio2" type="radio" id="period_year" value="Year"/>
           Year
          </label>
         </div>
        </div>
        <DayOfMonthSelector />
        <PeriodSelector />
        <SkipsEnabled />
      </div>
    );
  }
}

class PeriodSelector extends Component {
  getPeriod() {
    var period = 'Week';
    return period;
  }

  render() {
    return (
      <div className="form-group" id="div_checkbox">
        <div className="col-sm-8 col-sm-offset-4">
          <label className="checkbox-horizontal">
            <input name="checkbox" type="checkbox" id="enable_skips" value="Less often than every week"/>
             Less often than every {this.getPeriod()}
          </label>
          <span className="help-block" id="hint_checkbox">
            Use this for things like 'every other {this.getPeriod()}'
          </span>
       </div>
      </div>
    );
  }
}

class SkipsEnabled extends Component {
  getPeriod() {
    var period = 'Week';
    return period;
  }

  render() {
    return (
      <div className="form-group ">
       <label className="control-label col-sm-4" for="select2">
        How often?
       </label>
       <div className="col-sm-5">
        <div className="input-group">
         <div className="input-group-addon">
          Every
         </div>
         <input className="form-control" id="skips" name="number" placeholder="2" type="text"/>
         <div className="input-group-addon">
          {this.getPeriod()}
         </div>
        </div>
       </div>
      </div>
    );
  }
}
class DayOfMonthSelector extends Component {
  render() { //this component will be rendered as many times as dates that are chosen
    return(

      <div className="form-group">
       <label className="control-label col-sm-4" for="dayofmonth">
      {/*{{#if first_instance @index}}*/}
        Date(s) of Month?
      {/*{{/if}}*/}
       </label>
       <div className="col-sm-4">
        <select className="select form-control date_picker" id="" name="dayofmonth">
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
        </select>
       </div>
       <div className="col-sm-3">
         {/*{{#if not_equal @index 4}}*/}
         <button className="btn xsmall btn-default add_date" type="button" id="">
           <span className="fa fa-plus" id=""></span>
         </button>
         {/*{{/if}}*/}
         {/*{{#if not_the_only_date}}*/}
         <button className="xsmall btn btn-default del_date" type="button" id="">
           <span  className="fa fa-minus" id=""></span>
         </button>
         {/*{{/if}}*/}
       </div>
      </div>
    );
  }
}
