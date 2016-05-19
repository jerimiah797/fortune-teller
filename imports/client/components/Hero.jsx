import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
            <div className="col-md-5 col-sm-7 hidden-xs">
              <img src="LargeCrystalBallTransparent.png" className="img-responsive center-block" />
            </div>
            <div className="col-md-7 col-sm-5 col-xs-9 hero-padding">
              <span className="text-center"><AccountsUIWrapper /></span>
              <h1 className="text-center">FORTUNE TELLER</h1>
              <br />
              <h4 className="text-center"><i>Helping you see the future of your money</i></h4>
              <br />
            </div>

        </div>
      </div>
    );
  }
}
