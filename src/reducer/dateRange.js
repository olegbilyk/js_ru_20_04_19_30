import {DATE_FILTER} from '../constants'

export default (dateRange = {from: null, to: null}, action) => {
  const {type, payload} = action

  switch (type) {
    case DATE_FILTER:
      return dateRange = payload
  }

  return dateRange
}
