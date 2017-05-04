import React, { Component } from 'react'
import CommnetList from './CommentList'
import PropTypes from 'prop-types'
import { deleteArticle } from '../AC/articles'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }),

    // from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render () {
    const {article, toggleOpen} = this.props

    return (
      <section>
        <h2 onClick={toggleOpen}>
          {article.title}
        </h2>
        <a href="#" onClick={this.handleDelete}>Delete Me</a>
        {this.getBody()}
      </section>
    )
  }

  handleDelete = (ev) => {
    ev.preventDefault()
    deleteArticle(this.props.article.id)
  }

  getBody () {
    return this.props.isOpen && (
        <div>
          {this.props.article.text}
          <CommnetList comments={this.props.article.comments}/>
        </div>
      )
  }
}

export default Article
