import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./feature/product.slice";

export const rootReducer = combineReducers({
  products: productReducer,
});
