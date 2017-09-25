import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {
  state = {
    isOpen: false
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleOpen} type="button">
          {this.getTitle()}
        </button>
        {this.getCommentList()}
      </div>
    )
  }

  getTitle = () => this.state.isOpen ? 'Close Comments' : 'Open Comments'

  getCommentList = () => {
    const {comments = {}} = this.props

    if(!comments.length) return this.state.isOpen && <p>No comments yet</p>

    return this.state.isOpen && (
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
      </ul>
    )
  }

  toggleOpen = ev => {
    ev.preventDefault()

    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default CommentsList
