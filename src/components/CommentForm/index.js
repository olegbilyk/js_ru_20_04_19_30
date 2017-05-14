import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.pcss'

class CommentForm extends Component {
  state = {
    user: '',
    comment: '',
  }

  handleChange = itemName => ev => {
    this.validate(ev)

    this.setState({
      [itemName]: ev.target.value
    })
  }

  validate = ev => {
    const valueLength = ev.target.value.length
    const targetClass = ev.target.classList

    if (valueLength <= 5 || valueLength >= 20) {
      targetClass.add('on-error')
    } else if (targetClass.contains('on-error')) {
      targetClass.remove('on-error')
    }
  }

  render () {
    const {user, comment} = this.state

    return (
      <form className="comment-form">
        <label>Username:</label>
        <input type="text"
               placeholder="User name"
               value={user}
               onChange={this.handleChange('user')}/>

        <label>Comment:</label>
        <textarea placeholder="Add text comment"
                  value={comment}
                  onChange={this.handleChange('comment')}/>
      </form>
    )
  }
}

CommentForm.propTypes = {
  user: PropTypes.string,
  comment: PropTypes.string,
}

export default CommentForm