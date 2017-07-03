import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { canUseDOM } from 'exenv'

import './default.scss'

export default class HelloWorld extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>"hello world"</div>
    )
  }
}

if (canUseDOM) {
  ReactDOM.render(<HelloWorld />, document.getElementById('app'))
}

