import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "dark",
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { toggleTheme } = themeSlice.actions