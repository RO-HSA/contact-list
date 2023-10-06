import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact } from "../../App";

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: JSON.parse(localStorage.getItem('data') || '[]')
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

      if (state.items.find((contact) => contact.tel !== contactPayload.tel)) {
        alert("Contato já adicionado")
      } else {
        state.items.push(contactPayload)
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
