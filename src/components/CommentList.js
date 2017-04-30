import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList (props) {
  const {isOpen = false, toggleOpen} = props
  const linkText = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <a href="#" onClick={toggleOpen}>{linkText}</a>
      {getBody(props)}
    </div>
  )
}

function getBody (props) {
  const {comments = {}, isOpen = false} = props

  if (!isOpen) return null
  if (!comments.length) return <p>No comments yet</p>

  return (
    <ul>
      {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
    </ul>
  )
}

CommentList.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

getBody.propTypes = {
  comments: PropTypes.arry,
  isOpen: PropTypes.func
}

export default toggleOpen(CommentList)
