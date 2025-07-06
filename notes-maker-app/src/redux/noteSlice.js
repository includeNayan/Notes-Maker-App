import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes:localStorage.getItem("notes")
  ?   JSON.parse(localStorage.getItem("notes"))
  :   []
}

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNotes: (state, action) => {
      
    },
    updateNotes: (state, action) => {
      
    },
    resetNotes: (state, action) => {

    },
    removeNotes: (state, action) => {
      
    },
  },
})

export const {createNotes,updateNotes, resetNotes, removeNotes} = noteSlice.actions

export default noteSlice.reducer