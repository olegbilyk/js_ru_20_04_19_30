import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
  state = {
    isOpen: false
  }

  render () {
    const {article} = this.props
    return (
      <section>
        <h2 onClick={this.toggleOpen}>
          {article.title}
        </h2>
        {this.getBody()}
      </section>
    )
  }

  getBody () {
    return this.state.isOpen && <div>{this.props.article.text}{this.getComment()}</div>
  }

  getComment = () => {
    if (this.props.article.comments !== undefined) {
      return <CommentList comments={this.props.article.comments}/>
    }
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
