import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, Col, Checkbox, Modal } from 'react-bootstrap';

import EventForm from './forms/EventForm.jsx';

export default class EventModal extends Component {


  render() {
    return(
      <Modal show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Save</Button>
            <Button onClick={this.props.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
