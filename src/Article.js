import React, { Component } from 'react'
import CommentBuild from './CommentBuild'

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

  getBody = () => this.state.isOpen && <div><p>{this.props.article.text}</p>{this.getComment()}</div>

  getComment = () => this.props.article.comments && <CommentBuild comments={this.props.article.comments}/>

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
