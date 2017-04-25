import React, { Component } from 'react'

export default class Comment extends Component {
  state = {
    isOpen: false
  }

  render () {
    const {comment} = this.props
    //console.log(comment);
    return (
      <section>
        <h4 onClick={this.toggleOpen}>
          {comment.user}
        </h4>
        <div>{this.props.comment.text}</div>
      </section>
    )
  }

  // getBody () {
  //   return this.state.isOpen && <div>{this.props.comment.text}</div>
  // }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
