import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  note: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const notes = action.payload
      const index = state.note.findIndex((item) => item._id === notes._id)

      if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Note already exist")
        return
      }
      // If the course is not in the Pastes, add it to the Pastes
      state.note.push(notes)
      
      // Update to localstorage
      localStorage.setItem("notes", JSON.stringify(state.note))
      // show toast
      toast.success("Note added")
    },

    updateNotes: (state, action) => {
      const notes = action.payload
      const index = state.note.findIndex((item) => item._id === notes._id)

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.note[index] = notes
        // Update to localstorage
        localStorage.setItem("notes", JSON.stringify(state.note))
        // show toast
        toast.success("Notes updated")
      }
    },
    removeFromNotes: (state, action) => {
      const noteId = action.payload

      console.log(noteId)
      const index = state.note.findIndex((item) => item._id === noteId)

      if (index >= 0) {
        // If the course is found in the Pastes, remove it
        state.note.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("notes", JSON.stringify(state.note))
        // show toast
        toast.success("Notes deleted")
      }
    },
    resetNotes: (state) => {
      state.note = []
      // Update to localstorage
      localStorage.removeItem("notes")
    },
  },
})

export const { addToNotes, removeFromNotes, updateNotes, resetNotes } = noteSlice.actions

export default noteSlice.reducer