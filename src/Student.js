import React, { Component } from 'react'

 class Student extends Component {
  render() {
    return (
      <div>
      <h1>I am a {this.props.dept} Student</h1>
      </div>
    );
  }
}
