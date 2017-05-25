import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL} from '../constants'
import {arrayToMap, DefaultReducerState} from '../utils'
import {Record, OrderedMap} from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null,
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, response, randomId} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        //ты используешь comments.loaded и .loading, но не меняешь их + 
        //здесь так просто уже не выйдет, ведь ты загружаешь не все комменты сразу, а отдельно для каждой статьи
        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))
    }

    return comments
}
