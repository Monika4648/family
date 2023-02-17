import * as React from 'react';
import { Divider, Modal, } from '@mui/material';
import FamilyDetailsForm from './FamilyDetailsForm';
import Tree from './Tree';
import BottomButtons from './BottomButtons';
import Searchbar from './Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { nest } from './functions';
function LeftComponent() {

    const [openMenu, setopenMenu] = React.useState()

    const { treedata } = useSelector((state) => state.rootSlice)
    const handleopenMenu = () => {
        setopenMenu(true)
    }
    const handleClose = () => {
        setopenMenu(false)
    }
    return (
        <div style={{ width: "29%", height: "80vh", justifyContent: "space-between", marginRight: 5,overflow:'hidden' }}>
            <div style={{ backgroundColor: "white", height: "65vh", border: "2px solid lightblue", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <h4>Family Tree</h4>
                </div>
                <Divider />
                <Searchbar />
                <Tree treeData={nest(treedata)} />
            </div>
            <BottomButtons handleopenMenu={handleopenMenu} data={treedata} />
            <Modal
                open={openMenu}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FamilyDetailsForm handleClose={handleClose} />
            </Modal>
        </div>
    )
}

export default LeftComponent