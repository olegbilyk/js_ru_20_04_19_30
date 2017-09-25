import React from 'react'

function Comment ({comment}) {
  return (
    <blockquote>
      <q>{comment.text}</q>
      <cite>{comment.user}</cite>
    </blockquote>
  )
}

export default Comment
