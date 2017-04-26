import React, { Component } from 'react'

export default class Comment extends Component {
  state = {
    isOpen: false
  }

  render () {
    const {comment} = this.props

    return (
      <div>
        <h4 onClick={this.toggleOpen}>
          {comment.user}
        </h4>
        <p>{this.props.comment.text}</p>
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
