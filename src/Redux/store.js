import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import PDReducer from "./ProductDetailsRedux/PDReducer"
const rootReducer=combineReducers({
    product:PDReducer,
})
const middlewares=applyMiddleware(thunk)

export const store=createStore(rootReducer,middlewares)

// store.subscribe(()=>{
//     console.log("updated State-->",store.getState())
// })