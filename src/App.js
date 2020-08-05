import React, {Component} from 'react'

class Ticker extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
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

  render() { 
    return(
      <div>
        <p>The ticker number is: {this.state.count}</p>
        <button type= "button" onClick={this.clear}>Reset</button>
      </div>
    )
  }
}

export default Ticker