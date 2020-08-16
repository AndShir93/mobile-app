import * as actionTypes from './actionTypes'

export default (state = [], action) => {

    switch(action.type){
        case actionTypes.SET_CURRENT: {
            return Object.assign({},state, {
                current: action.current
            })
        }
        case actionTypes.SET_IS_LOCAL: {
            return Object.assign({},state, {
                isLocal: action.isLocal,
                current: action.current
            })
        }
        default:
            return state
    }
}