import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
  /*
   constructor() {
   super()
   this.state = {
   isOpen: false
   }
   }
   */
  state = {
    isOpen: false
  }

  render () {
    const {article} = this.props
    return (
      <section>
        <h2 onClick={this.toggleOpen}>
          <button type="button">
            {article.title}
          </button>
        </h2>
        {this.getBody()}
      </section>
    )
  }

  getBody () {
    const {article} = this.props

    return this.state.isOpen &&
      <div>
        <p>{this.props.article.text}</p>
        <CommentList comments={article.comments}/>
      </div>
  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

/*
 export default function Article(props) {
 const {article} = props
 return (
 <section>
 <h2>
 {article.title}
 </h2>
 <div>
 {article.text}
 </div>
 </section>
 )
 }*/
