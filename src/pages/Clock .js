import React, { Component } from "react"
import ReactDOM from "react-dom"

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }

    // this.openDialog = this.openDialog.bind(this);
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

  openDialog(num, e){
      console.log("e: ", e)
    alert(num)
  }

  render() {
    return (
        <div>
            <h1>现在时间是：{this.state.date.toLocaleTimeString()}</h1>
            <button onClick={this.openDialog.bind(this, 3)}>弹窗</button>
        </div>
    )
  }
}

export default Clock
