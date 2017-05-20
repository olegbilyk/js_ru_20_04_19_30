import {INCREMENT, DELETE_ARTICLE, SELECTS_FILTER, DATE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function selectsFilter(obj) {
    return {
        type: SELECTS_FILTER,
        payload: obj
    }
}


export function dateFilter(dateRange) {
    return {
        type: DATE_FILTER,
        payload: dateRange
    }
}
