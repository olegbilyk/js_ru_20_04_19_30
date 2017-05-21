import {ADD_COMMENT} from '../constants'


export default store => next => action => {
    if(action.type === ADD_COMMENT) {
        action.payload.id = Math.floor(Math.random() * (1000 - 100)) + 100
    }

    next(action)
}