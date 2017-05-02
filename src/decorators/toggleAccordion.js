import React, { Component as BasicComponent } from 'react'

export default (OriginalComponent) => class DecorationComponent extends BasicComponent {
  state = {
    openAccordionId: null
  }

  render () {
    return <OriginalComponent {...this.props} {...this.state} toggleAccordion={this.toggleAccordion} />
  }

  toggleAccordion = id => ev => {
    ev && ev.preventDefault && ev.preventDefault()

    this.setState({
      openAccordionId: (this.state.openAccordionId !== id) ? id : null
    })
  }
}
