import React, { Component } from 'react';
import Fire from '../../config/Fire';
import Button from "../../components/button/Button";
import "./Logout.css";

class Logout extends Component {

  logout() {
    Fire.auth().signOut()
    .then(() => {
      console.log('Successfully Logged Out');
      this.props.history.push('/')
    })
    .catch((err) => {
      console.log('Error: ' + err.toString());
    })
  }

  render() {
    return (
      <div className="logout-button-container">
        <h1>You Are Logged In</h1>
        <Button 
        customClassName="regular-button" onClick = {this.logout}>
            Logout
          </Button>
      </div>
    )
  }
}

export default Logout;