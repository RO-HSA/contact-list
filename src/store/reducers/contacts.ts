import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact } from "../../App";

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      const contactPayload = action.payload

      if (state.items.find((contact) => contact.tel === contactPayload.tel)) {
        alert("Contato já adicionado")
      } else {
        state.items.push(contactPayload)
      }
    }
  }
})

export const { add } = contactsSlice.actions
export default contactsSlice.reducer
