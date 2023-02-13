import { Button } from '@mui/material';
import React from 'react'

function BottomButtons({ handleopenMenu, data }) {

    function download(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    function onDownload(data) {
        download(JSON.stringify(data), "FamilyTree.json", "text/plain");
    }
    return (
        <div style={{ height: "14vh", marginTop: 5, justifyContent: "space-between", padding: 5 }}>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", height: "48%" }}>
                <Button style={{ width: "49%", textTransform: 'none' }} variant="outlined">Import Jason</Button>
                <Button onClick={handleopenMenu} style={{ width: "49%", textTransform: 'none' }} variant="outlined">Add Family</Button>
            </div>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", height: "49%", marginTop: 2 }}>
                <Button style={{ width: "49%", textTransform: 'none' }} onClick={e => onDownload(data)} variant="outlined">Export Jason</Button>
                <Button style={{ width: "49%", textTransform: 'none' }} variant="outlined">Print Family Tree</Button>
            </div>
        </div>
    )
}

export default BottomButtons