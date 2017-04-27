import React from 'react'
import Comment from './Comment'

export default function CommentList ({comments}) {
  if (!comments) return null

  const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)

  return (
    <ul>
      {elements}
    </ul>
  )
}
