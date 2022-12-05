import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCCESS } from "./prodActionTypes"
import {productsUrl} from "../../Deployed-server-url/deployed-server-url"
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

export const getUrl=(baseUrl,_sort,_order,price_gte,priceLow,price_lte,priceHigh)=>(dispatch)=>{
   return baseUrl
}


export const getProducts=(page)=>(dispatch)=>{
    let apiUrl=dispatch(getUrl(`${productsUrl}?_page=${page}&_limit=12`))
    dispatch(getProductsLoading())
    fetch(apiUrl) 
    .then((res)=>res.json())
    .then((res)=>{
        console.log("res after getProducts-->",res)
        dispatch(getProductsSuccess(res))})
    .catch(()=>dispatch(getProductsError()))
}
