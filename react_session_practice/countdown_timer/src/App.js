import React from "react";
import "./index.css";

//class - stuff you inherit from family
//props - stuff someone gives to you
//state - stuff you own


class Running extends React.Component {
  constructor(props) {
    super(props);
    this.state = { running:false };
    
  }
  

  componentDidMount() {
    console.log(this.props)
   
  }

  componentDidUpdate() {
    console.log("state changed--- RUNNING COMP");
    console.log('running: ', this.state.running)
    if (this.state.running === false) {
      // this.setState({running:false})
    }
    
  }

  render(){
    return (
      <div className="container">
        <h2>{this.state.running? "Running..." : "Stopped!!!"}</h2>
      </div>
    )
  }

}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 500, running:true };
    this.timer = 0;
    
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (seconds < 10) {
      let leadZero = '0' + seconds;
      seconds = leadZero
    }
    if (minutes < 10) {
      let leadZero = '0' + minutes;
      minutes = leadZero
    }
    if (hours < 10) {
      let leadZero = '0' + hours;
      hours = leadZero
    }

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

  componentDidUpdate() {
    console.log("state changed");
    console.log('running: ', this.state.running)

  }
  
  startTimer = () => {
     
    if (this.timer === 0 && this.state.seconds > 0) {
      this.setState({ running: true });
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  stopTimer = () => {
    this.setState({...this.state,running: false});
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
    if (seconds === 0) {
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
        
        {/* <div className="time">
         Hours : Minutes : Seconds
        </div> */}
        <div className="time"><h1>{this.state.time.h}  :   {this.state.time.m}   :  {this.state.time.s} </h1></div>
        <div>
          <Running running={this.state.running}/>
        </div>
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
