import React, { Component as BasicComponent } from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class DecorationComponent extends BasicComponent {
  state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
