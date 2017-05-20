import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
  componentDidMount () {
    const ref = this.refs[this.props.articles[0].id]
    // console.log('---', ref, findDOMNode(ref))
  }

  hasArticleSelect (articles) {
    const {selection} = this.props
    let articlesSelect = []

    for (let article of articles) {
      for (let selectId of selection) {
        if (article.id === selectId.value) {
          articlesSelect.push(article)
        }
      }
    }

    if (articlesSelect.length > 0) return articlesSelect

    return articles
  }

  hasDateRange = (articles) => {
    return articles.filter(article => {
      let {from, to} = this.props.dateRange

      if (from !== null) from = from.toISOString()
      if (to !== null) to = to.toISOString()


      if ((article.date > from || from === null) && (article.date < to || to === null)) return true
    })
  }

  render () {
    const {articles, toggleOpenItem, isItemOpened} = this.props
    const articlesFilters = this.hasDateRange(this.hasArticleSelect(articles))

    const elements2 = articlesFilters.map(article => <li key={article.id}>
      <Article article={article}
               isOpen={isItemOpened(article.id)}
               toggleOpen={toggleOpenItem(article.id)}
               ref={article.id}
      />
    </li>)

    return (
      <ul ref={this.getContainerRef}>
        {elements2}
      </ul>
    )
  }

  getContainerRef = ref => {
    this.list = ref
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  //from accordion decorator
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => ({
  articles: state.articles,
  selection: state.selection,
  dateRange: state.dateRange
}))(accordion(ArticleList))