import React from "react";
import "./App.css";



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 820, running: false };
    this.timer = 0;
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    

    if (seconds < 10) {
      let leadZero = '0'+seconds;
      seconds = leadZero
    }

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    // console.log(obj);
    return obj;
  };

  componentDidUpdate() {
    console.log("state changed");
    console.log('running: ', this.state.running)
    
  }

  componentDidMount() {
    //happens once, so the timer is ready to start/stop
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({running: true})
    }
  };

  stopTimer = () => {
    if (this.timer !== 0) {
      clearInterval(this.timer);
      this.timer = 0;
      this.setState({running: false})
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
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  };

  render() {
    return (
      <div >
        <h1 className="timer">
          {this.state.time.m} : {this.state.time.s}
        </h1>
        <button className="start" onClick={this.startTimer}>Start</button>
        &nbsp;
        <button className="stop" onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }
}


export default function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}