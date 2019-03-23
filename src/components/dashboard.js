import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    console.log(this.props.ctr);
    if (!auth.getJwt()) {
      window.location = "/login";
    }
    return (
      <div class="row">
        <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
          <h3 style={{ borderBottom: "1px solid #CCC" }}>Dashboard </h3>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.props.ctr.map(user => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.users
  };
};

export default connect(mapStateToProps)(Dashboard);
