import {OrderedMap, Record} from 'immutable'

export function arrayToMap(arr, RecordModel) {
    return arr.reduce((acc, el) => acc.set(el.id, RecordModel ? new RecordModel(el) : el),
        new OrderedMap({}))
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}

export const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false
})
