import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, Col, Checkbox, Modal } from 'react-bootstrap';

import EventForm from './forms/EventForm.jsx';

export default class EventModal extends Component {


  render() {
    return(
      <Modal show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>Create an Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Save</Button>
            <Button onClick={this.props.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
