import React, { Component } from 'react';
//import { Bootstrap } from 'meteor/twbs:bootstrap';

// Task component - represents a single debit or credit account
export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
            <div className="col-md-5 col-sm-7 hidden-xs">
              <img src="LargeCrystalBallTransparent.png" className="img-responsive center-block" />
            </div>
            <div classname="col-md-7 col-sm-5 col-xs-9 hero-padding">
              <h1 className="text-center">FORTUNE TELLER</h1>
              <br />
              <h4 className="text-center"><i>Helping you see the future of your money</i></h4>
            </div>

        </div>
      </div>
    );
  }
}
