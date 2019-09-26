import React, { Component } from 'react';

class StartButton extends React.Component {
    render() {
      return (
        <div style={{ margin: 20 }} className="text-center">
          <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
        </div>
  
      );
    }
  }
export default StartButton;