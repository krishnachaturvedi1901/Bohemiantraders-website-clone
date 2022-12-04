import { CREATE_FILTER_OBJECT } from "./FilterActionTypes";

export const createFilterObject=(payload)=>({
  type:CREATE_FILTER_OBJECT,
  object:payload
})