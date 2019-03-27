import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

import Clock from "./pages/Clock "

function handleClick(e){
    alert(e.toString())
}

const button = (
    <button onClick={handleClick}>click</button>
)

ReactDOM.render(<div><Clock name='张海'/></div>, document.getElementById("root"))

ReactDOM.render(<div>{button}</div>, document.getElementById("sub-root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
