import {GET_PD_SUCCCESS } from "./PDActionTypes"

const initState={
    products:{
        "id":"" ,
        "brand": "",
        "category": "",
        "name": "",
        "price":"",
        "reviews":"",
        "rating":"",
        "sizes": [
        
        ],
        "details": "",
        "features": [],
        "img": {
          "item1": "",
          "item2": "",
          "model1": "",
          "model2": ""
        },
        "inStock": "",
        "newest": "",
        "bestSelling":"",
        "featured": ""}
  }
  
  const PDReducer=(state=initState,{type,payload})=>{
   switch(type){
      case GET_PD_SUCCCESS:{
          return{
              product:payload,
          }
      }
      default:{
          return state
      }
  
   }
  }
  export default PDReducer