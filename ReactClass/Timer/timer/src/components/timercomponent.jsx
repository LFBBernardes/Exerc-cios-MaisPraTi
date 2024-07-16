import { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log(`Updated to ${this.state.count}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("Timer cleaned up");
  }

  render() {
    return (
      <div className="container">
        <h1 className="number">{this.state.count}</h1>
      </div>
    );
  }
}

export default TimerComponent;
