import React, { PropTypes } from 'react'
import {Panel, Col} from 'react-bootstrap'

class Sidebar extends React.Component {
  render () {
    return (

        <Col md={12}>
          <Panel header="Events">
            <h4>Bills: 12</h4>
            <h4>Incomes: 2</h4>
          </Panel>
          <Panel header="This Month">
            <h4>In: $6500</h4>
            <h4>Out: $6200</h4>
          </Panel>
          <Panel header="Widget">
            How about some content
          </Panel>
          <Panel header="Widget">
            How about some content
          </Panel>
        </Col>

    )
  }
}

export default Sidebar;
