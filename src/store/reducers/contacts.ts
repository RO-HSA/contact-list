import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact } from "../../App";

type ContactState = {
  items: Contact[],
  addedSuccessfully: boolean
}

const initialState: ContactState = {
  items: JSON.parse(localStorage.getItem('data') || '[]'),
  addedSuccessfully: false
}

const setLocalStorage = (state: ContactState) => {
  localStorage.setItem('data', JSON.stringify(state.items))
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      const contactPayload = action.payload

      if (state.items.find((contact) => contact.name.toLowerCase().split(' ').join() === contactPayload.name.toLowerCase().split(' ').join())) {
        alert("Contato já adicionado")
        state.addedSuccessfully = false
      } else {
        state.items.push(contactPayload)
        state.addedSuccessfully = true
      }
      setLocalStorage(state)
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex((item) => item.tel === action.payload.tel)

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
      setLocalStorage(state)
    },
    remove: (state, action: PayloadAction<Contact>) => {
      state.items = state.items.filter((item) => item.tel !== action.payload.tel)
      setLocalStorage(state)
    }
  }
})

export const { add, edit, remove } = contactsSlice.actions
export default contactsSlice.reducer
