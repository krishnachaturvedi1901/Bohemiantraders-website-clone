import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCCESS } from "./prodActionTypes"

export const getProductsLoading=()=>({
    type:GET_PRODUCTS_LOADING
})
export const getProductsSuccess=(data)=>({
    type:GET_PRODUCTS_SUCCCESS,
    payload:data
})
export const getProductsError=()=>({
    type:GET_PRODUCTS_ERROR
})

export const getProducts=()=>(dispatch)=>{
    dispatch(getProductsLoading())
    fetch(`http://localhost:3001/products`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log("res after getProducts-->",res)
        dispatch(getProductsSuccess(res))})
    .catch(()=>dispatch(getProductsError()))
}
