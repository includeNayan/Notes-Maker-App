import {configureStore} from "@reduxjs/toolkit"
import notesReducer from "./noteSlice.js" 

export const store = configureStore({
  reducer:{
      notes: notesReducer
  }
})