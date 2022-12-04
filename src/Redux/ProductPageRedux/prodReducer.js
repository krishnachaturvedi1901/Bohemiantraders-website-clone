import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCCESS } from "./prodActionTypes"

const initState={
    loading:false,
    error:false,
    products:[]
  }
  
  const prodReducer=(state=initState,{type,payload})=>{
   switch(type){
      case GET_PRODUCTS_LOADING:{
          return{
              loading:true,
              error:false,
              products:[]
          }
      }
      case GET_PRODUCTS_SUCCCESS:{
          return{
              loading:false,
              error:false,
              products:payload,
          }
      }
      case GET_PRODUCTS_ERROR:{
          return{
              loading:false,
              error:true,
              products:[]
          }
      }
      default:{
          return state
      }
  
   }
  }
  export default prodReducer