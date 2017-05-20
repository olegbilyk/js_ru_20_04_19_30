import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {dateFilter} from '../../AC'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
      const {dateRange} = this.props;

      this.props.dateFilter(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(dateState => ({
  dateRange: dateState.dateRange
}), {dateFilter})(DateRange)