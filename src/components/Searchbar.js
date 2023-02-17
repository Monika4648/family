import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchfamilydata } from '../store/reducers/rootSlice';
function Searchbar() {
    const dispatch = useDispatch()
    return (
        <div style={{ display: "flex", width: '100%', alignItems: "center", justifyContent: "center" }}>
            <TextField
                style={{ width: '80%' }}
                placeholder="Search"
                onChange={(e) => dispatch(searchfamilydata(e.target.value))}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </div>
    )
}

export default Searchbar