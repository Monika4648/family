import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wholeFamily: [],
  addparentId: '',
  searchfamily: '',
  treedata: [
    { id: 1, Name: 'Great Grand Father', parent_id: null },
  ],
  model: ''
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addFamilyState: (state, action) => {
      state.wholeFamily = [...state.wholeFamily, action.payload]
    },
    addChildToFamily: (state, action) => {
      state.addparentId = action.payload
    },
    searchfamilydata: (state, action) => {
      state.searchfamily = action.payload
    },
    setopenModel: (state, action) => {
      state.model = action.payload
    },
    settreedata: (state, action) => {
      state.treedata = [...state.treedata, action.payload]
    },
  },
})

export const { addFamilyState, addChildToFamily,
  searchfamilydata, settreedata, setopenModel } = rootSlice.actions

export default rootSlice.reducer