import React, { Component } from 'react'
import CommentList from './CommentList'

export default class CommentBuild extends Component {
  state = {
    isOpen: false
  }

  render () {
    return (
      <div>
        <h3 onClick={this.toggleOpen}>
          {this.getTitle()}
        </h3>
        {this.getCommentList()}
      </div>
    )
  }

  getCommentList = () => this.state.isOpen && <CommentList comments={this.props.comments}/>

  getTitle = () => this.state.isOpen ? 'Close Comments' : 'Open Comments'

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}