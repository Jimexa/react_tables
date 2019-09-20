import React, { Component } from "react";
import "./TableScreen.css";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class TableScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let tableData = this.props.data.map(item => (
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.adress}</td>
        <td>{item.jobTitle}</td>
      </tr>
    ));

    return (
      <Row>
        <Col xs={1}></Col>
        <Col>
          <Table
            class="ali"
            striped
            bordered
            hover
            variant="dark"
            responsive
            className="table"
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Adress</th>
                <th scope="col">Job Title</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </Table>
        </Col>
        <Col xs={1}></Col>
      </Row>
    );
  }
}

export default TableScreen;
