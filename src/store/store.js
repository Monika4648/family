import { configureStore } from '@reduxjs/toolkit'
import rootSliceReducer from './reducers/rootSlice'

export const store = configureStore({
  reducer: {
    rootSlice: rootSliceReducer,
  },
})