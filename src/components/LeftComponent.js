import * as React from 'react';
import { Divider, Modal,  } from '@mui/material';
import FamilyDetailsForm from './FamilyDetailsForm';
import Tree from './Tree';
import BottomButtons from './BottomButtons';
import Searchbar from './Searchbar';
function LeftComponent() {

    const [openMenu, setopenMenu] = React.useState()
  
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
    const treeData = [
        {
            key: "0",
            label: "Great Grand Father",
            children: [
                {
                    key: "0-0",
                    label: "Daughter 1",
                    children: [
                        {
                            key: "0-1-1",
                            label: "Son 1",
                        },
                        {
                            key: "0-1-2",
                            label: "Son 2",
                        },
                    ],
                },
            ],
        },
        {
            key: "1",
            label: "Son 1",
            children: [
                {
                    key: "1-0",
                    label: "Son 1",
                },
                {
                    key: "0-0",
                    label: "Son2",
                },
            ],
        },
        {
            key: "2",
            label: "Son 2",
            children: [
                {
                    key: "0-1-1",
                    label: "Son 1",
                },
                {
                    key: "0-1-2",
                    label: "Son 2",
                    children: [
                        {
                            key: "0-1-1",
                            label: "Son 1",
                        },
                    ],
                },
            ],
        },
    ];
    const handleopenMenu = () => {
        setopenMenu(true)
    }
    const handleClose = () => {
        setopenMenu(false)
    }
    const [familyInfo, setFamilyInfo] = React.useState(initialFamilyInfoState)
    return (
        <div style={{ width: "29%", height: "80vh", justifyContent: "space-between", marginRight: 5 }}>
            <div style={{ backgroundColor: "white", height: "65vh", border: "2px solid lightblue", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <h4>Family Tree</h4>
                </div>
                <Divider />
                <Searchbar />
                <Tree treeData={treeData} />
            </div>
            <BottomButtons handleopenMenu={handleopenMenu} data={treeData} />
            <Modal
                open={openMenu}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FamilyDetailsForm handleClose={handleClose} setFamilyInfo={setFamilyInfo} familyInfo={familyInfo} />
            </Modal>
        </div>
    )
}

export default LeftComponent