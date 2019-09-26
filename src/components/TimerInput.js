import React from 'react';

class TimerInput extends React.Component {
    render() {
      return (
        <div style={{marginLeft:100}}>
          <h3>Waktu menjawab: </h3>
          <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
        </div>
      );
    }
  }

export default TimerInput;