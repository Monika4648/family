import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settreedata } from '../store/reducers/rootSlice';

export function createuid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
};
export const familyInfodata = {
  "Name": "people1",
  "Spouse": "people2",
  "Location": "india",
  "Birth Year": "1234",
  "Present Address": "adfsaf",
  "Family Photo": null
}
function FamilyDetailsForm({ handleClose }) {
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

  const { addparentId } = useSelector((state) => state.rootSlice)

  const [familyInfo, setFamilyInfo] = React.useState(familyInfodata)
  const dispatch = useDispatch()
  const settest = (e) => {
    e.preventDefault()
    const id = createuid()
    dispatch(settreedata({ id, parent_id: addparentId, ...familyInfo }))
    handleClose()
  }

  const setFamilyInfoState = e => {
    const { name, value } = e.target
    setFamilyInfo(prevState => {
      return { ...prevState, [name]: value }
    })
  }
  const onPicUpload = e => {
    const picUrls = []

    const allSelectedImgs = e.target.files

    for (let index = 0; index < allSelectedImgs.length; index++) {
      const currentImg = allSelectedImgs[index];
      picUrls.push(URL.createObjectURL(currentImg))
    }

    picUrls.length > 0 && setFamilyInfo(prevState => {
      return {
        ...prevState,
        "Family Photo": picUrls
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
        {Object.keys(familyInfodata).map((fieldKey, i) => fieldKey !== "Family Photo" &&
          <TextField name={fieldKey} variant='outlined' label={fieldKey} onChange={setFamilyInfoState} />)}

        <div>
          {familyInfo["Family Photo"] && familyInfo["Family Photo"].map(src => <img style={{ padding: '5px' }} src={src} alt='family' key={src} width={100} />)}
        </div>
        <div style={{ textAlign: 'center' }} >
          <Button variant="contained" component="label" sx={{ textTransform: 'capitalize' }} >
            Upload Pictures
            <input
              type='file'
              onChange={onPicUpload}
              hidden
              multiple
              accept="image/*"
            />
          </Button>
          <Button variant="contained" type='submit'>Add</Button>
        </div>
      </form>
    </Box>
  )
}

export default FamilyDetailsForm