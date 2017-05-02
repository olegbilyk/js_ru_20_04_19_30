import React, { Component } from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array,

    // from toggleArticle decorator
    // openArticleId: PropTypes.str,
    toggleAccordion: PropTypes.func
  }

  render () {
    const {openAccordionId, toggleAccordion} = this.props
    console.log(openAccordionId)

    const elements = this.props.articles.map(article => <li key={article.id}>
      <Article article={article}
               isOpen={article.id === openAccordionId}
               toggleOpen={toggleAccordion(article.id)}
      />
    </li>)

    return (
      <ul>
        {elements}
      </ul>
    )
  }
}

export default toggleAccordion(ArticleList)
