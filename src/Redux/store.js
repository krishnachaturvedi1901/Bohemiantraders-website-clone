import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import prodReducer from "./ProductPageRedux/prodReducer"
const rootReducer=combineReducers({
    productsState:prodReducer
})
const middlewares=applyMiddleware(thunk)

export const store=createStore(rootReducer,middlewares)

store.subscribe(()=>{
    console.log("updated State-->",store.getState())
})