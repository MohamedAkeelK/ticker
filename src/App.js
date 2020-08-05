import React, {Component} from 'react'

class Ticker extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      button: "Pause"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.count % 3 === 0) return true;
    else return false;
  }

  clear = () => {
    this.setState ({
      count: this.state.count = 0
    })
  }

  toggleButton = () => {
    if(this.state.button === "Pause") {
      this.setState ({
        // count: clearInterval(),
        button: "ticker is paused",
      })
    } else if (this.state.button === "ticker is paused") {
      this.setState ({
        button: "Pause",
      })
    } else {
      return;
    }

  }

  render() { 
    return(
      <div>
        <p>The ticker number is: {this.state.count}</p>
        <button type= "button" onClick={this.clear}>Reset</button>
        <button type= "button" onClick={this.toggleButton}>{this.state.button}</button>
      </div>
    )
  }
}

export default Ticker