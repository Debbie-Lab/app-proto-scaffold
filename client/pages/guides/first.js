import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { canUseDOM } from 'exenv'


export default class HelloWorld extends Component {
  render() {
    return (
      <div>"hello world"</div>
    )
  }
}

if (canUseDOM) {
  ReactDOM.render(<HelloWorld />, document.getElementById('app'))
}

