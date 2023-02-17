import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setopenModel } from '../store/reducers/rootSlice'
import { familyInfodata } from './FamilyDetailsForm'
import { TreePreviewModal } from './TreePreviewModal'

function RightComponents() {
    const { treedata,model } = useSelector((state) => state.rootSlice)

    const { addparentId } = useSelector((state) => state.rootSlice)
    const [filterdata, setfilterdata] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        setfilterdata(treedata.filter(item => item.id === addparentId)[0])
    }, [addparentId, treedata])
    const handleClose = () => dispatch(setopenModel(''))
    const Label = ({ label, value }) => {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        minWidth: '25%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    {label} <span>:</span>
                </div>
                {label !== "Family Photo" ? <div style={{ marginLeft: '8px' }}>{value}</div> : <div>{value?.map(src => <img src={src} alt={"Family"} key={src} width={100} />)}</div>}
            </div>
        )
    }
    return (
        <div style={{ width: "59%", backgroundColor: "white", height: "80vh", border: "2px solid lightblue", borderRadius: 10 }}>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                <h4>Family Details</h4>
            </div>
            <Divider />
                <div style={{ height: "100%", paddingLeft: 100 }}>
                    {filterdata && Object.keys(familyInfodata).map(key => {
                        return (
                            <>
                                {filterdata[key] && <Label key={key} label={key} value={filterdata[key]} />}
                            </>
                        )
                    })}
                </div>
                <TreePreviewModal open={model==='print'} handleClose={handleClose} />
        </div>
    )
}

export default RightComponents