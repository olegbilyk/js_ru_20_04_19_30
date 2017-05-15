import React from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
//нет, если нужны - передай через пропсы
import {articles} from '../fixtures'

import 'react-day-picker/lib/style.css'

export default class Range extends React.Component {
  state = {
    from: null,
    to: null,
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick = e => {
    e.preventDefault()

    this.setState({
      from: null,
      to: null,
    })
  }

  render () {
    const {from, to} = this.state
    console.log(moment(articles[0].date).format('L'))
    console.log(moment(from).format('L'))
    console.log(Date.parse(moment(articles[0].date).format('L')) === Date.parse(moment(from).format('L')))

    return (
        <DayPicker
          numberOfMonths={1}
          selectedDays={[from, {from, to}]}
          onDayClick={this.handleDayClick}
        />
    )
  }
}
