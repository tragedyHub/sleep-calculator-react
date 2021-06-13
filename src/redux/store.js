import rootReducer from "./root-reducer";
import thunkMiddleware from 'redux-thunk';

const { combineReducers, createStore, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    root: rootReducer
});

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware)
));

export default store;