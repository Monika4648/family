import { createSlice } from '@reduxjs/toolkit'
import { buildTree } from '../../components/functions'

const initialState = {
  wholeFamily: [  ],
  addChild: '',
  treedata: [],
  searchfamily:''
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addFamilyState: (state, action) => {
      state.wholeFamily = [...state.wholeFamily, action.payload]
      state.treedata = buildTree([...state.wholeFamily, action.payload])
    },
    addChildToFamily: (state, action) => {
      state.addChild = action.payload
    },
    searchfamilydata: (state, action) => {
      state.searchfamily = action.payload
    },
  },
})

export const { addFamilyState, addChildToFamily,searchfamilydata } = rootSlice.actions

export default rootSlice.reducer