import React from "react";
import "./index.css";

//class - stuff you inherit from family
//props - stuff someone gives to you
//state - stuff you own

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 500 };
    this.timer = 0;
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  };

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer = () => {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  stopTimer = () => {
    if (this.timer !== 0) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  };

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="btn-container">
          <button onClick={this.startTimer} className="btn-start">Start</button>
          <button onClick={this.stopTimer} className="btn-stop">Stop</button>
        </div>
        <br />
        <br />
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}

// Composition > Inheritance
export default function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}
