import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { canUseDOM } from 'exenv'

import './default.scss'

export default class HackerNews extends Component {
  constructor(props) {
    super(props)
  }

  renderTopstories() {
    return this.props.topstories.map(story => (
      <li key={story.id}>
        <a href={story.url}>{story.title}</a>
      </li>
    ))
  }

  render() {
    return (
      <ul>{this.renderTopstories()}</ul>
    )
  }
}

if (canUseDOM) {
  ReactDOM.render(<HackerNews { ...window.serveData }/>, document.getElementById('app'))
}

