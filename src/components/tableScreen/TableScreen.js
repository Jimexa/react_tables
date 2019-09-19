import React, { Component } from "react";
import "./TableScreen.css";

class TableScreen extends Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Adress</th>
            <th scope="col">Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimitris</td>
            <td>Exadaktylos</td>
            <td>Trapezountiou 4</td>
            <td>Front end Developer</td>
          </tr>
          <tr>
            <td>Dimitris</td>
            <td>Exadaktylos</td>
            <td>Trapezountiou 4</td>
            <td>Front end Developer</td>
          </tr>
          <tr>
            <td>Dimitris</td>
            <td>Exadaktylos</td>
            <td>Trapezountiou 4</td>
            <td>Front end Developer</td>
          </tr>
          <tr>
            <td>Dimitris</td>
            <td>Exadaktylos</td>
            <td>Trapezountiou 4</td>
            <td>Front end Developer</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableScreen;
