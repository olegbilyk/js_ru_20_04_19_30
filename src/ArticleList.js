import React from 'react'
import Article from './Article'

export default function ArticleList ({articles}) {
  const elements = articles.map(article => <li><Article key={article.id} article={article} /></li>)
  return (
    <ol>
      {elements}
    </ol>
  )
}
