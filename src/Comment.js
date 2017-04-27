import React, { Component } from 'react'

//Это можно сделать Functional Component, по возможности используй их
export default class Comment extends Component {
  //зачем он тебе?
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
