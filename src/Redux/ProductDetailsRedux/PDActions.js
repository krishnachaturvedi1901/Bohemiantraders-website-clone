import {GET_PD_SUCCCESS } from "./PDActionTypes"
import {productsUrl} from "../../Deployed-server-url/deployed-server-url"
export const getPDSuccess=(data)=>({
    type:GET_PD_SUCCCESS,
    payload:data
})
export function getProduct(dispatch,id){
    console.log("hihsdjgkjsh")
    fetch(`${productsUrl}/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        
        dispatch(getPDSuccess(res))})      
    }
  