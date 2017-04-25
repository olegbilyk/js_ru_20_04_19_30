import React, { Component } from 'react'
import Comment from './Comment'

export default function CommentList ({comments}) {
  const elements = comments.map(comment => <li><Comment key={comment.id} comment={comment}/></li>)

  return (
    <ul>
      {elements}
    </ul>
  )
}
