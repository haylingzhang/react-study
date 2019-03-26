import React, { Component } from "react"
import ReactDOM from "react-dom"

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount(){
    this.timerId = setInterval(() => {
        this.tick();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
      this.setState({
        date: new Date()
      })
  }

  render() {
    return <h1>现在时间是：{this.state.date.toLocaleTimeString()}</h1>
  }
}

export default Clock
