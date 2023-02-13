import { Box, Button, TextField } from '@mui/material'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFamilyState } from '../store/reducers/rootSlice';

export function createuid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
};
function FamilyDetailsForm({ setFamilyInfo,  handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const { wholeFamily,  } = useSelector((state) => state.rootSlice)
  const initialFamilyInfoState = {
    "Name": "people1",
    "Spouse": "people2",
    "Location": "india",
    "Birth Year": "1234",
    "Present Address": "adfsaf",
    // "Label 1": "asdfas",
    // "Label 2": "asdfas",
    "Family Photo": null
  }
  function buildTree(array) {
    let tree = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].parent_id) {
        let parent = array.filter(elem => elem.id === array[i].parent_id).pop()
        parent.children.push(array[i])
        console.log(parent, 'p')
      } else {
        tree.push(array[i])
      }
    }
    return tree
  }
  const dispatch = useDispatch()
  const settest = (e) => {
    e.preventDefault()
    const id = createuid()
    console.log('settest')
    dispatch(addFamilyState({ id, data: 'hello', parent_id: 1, children: [] }))
  
    handleClose()
  }
useEffect(() => {
  const ar = buildTree(wholeFamily)
  console.log(ar,'e')
}, [wholeFamily])


  const setFamilyInfoState = e => {
    const { name, value } = e.target
    setFamilyInfo(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  return (
    <Box sx={style}>
      <form
        onSubmit={settest}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        {Object.keys(initialFamilyInfoState).map((fieldKey, i) => fieldKey !== "Family Photo" && <TextField name={fieldKey} variant='outlined' label={fieldKey} onChange={setFamilyInfoState} />)}
        <div style={{ textAlign: 'center' }} >
          <Button variant="contained" type='submit'>Add</Button>
        </div>
      </form>
    </Box>
  )
}

export default FamilyDetailsForm