import {GET_PD_SUCCCESS } from "./PDActionTypes"
export const getPDSuccess=(data)=>({
    type:GET_PD_SUCCCESS,
    payload:data
})
export function getProduct(dispatch,id){
    console.log("hihsdjgkjsh")
    fetch(`https://bohemian-server.onrender.com/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        
        dispatch(getPDSuccess(res))})      
    }
  