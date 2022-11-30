import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from "../src/core/actions/reducers";


const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store


const reducer = combineReducers(reducers);

export function initStore(initialState) {
  return applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState)
}
