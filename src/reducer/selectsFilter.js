import {SELECTS_FILTER} from '../constants'

export default (selectionFilter = [], action) => {
    const {type, payload} = action

    switch (type) {
        case SELECTS_FILTER:
            return selectionFilter = payload
    }

    return selectionFilter
}
