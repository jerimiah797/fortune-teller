// App.jsx
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
//import { createContainer } from 'meteor/react-meteor-data';

export default class App extends Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        {this.props.nav}
        {this.props.content}
      </div>
    );
  }
}
