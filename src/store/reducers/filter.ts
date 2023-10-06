import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  term: String
}

const initialState: FiltroState = {
  term: '',
}

const FiltroSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = FiltroSlice.actions
export default FiltroSlice.reducer
