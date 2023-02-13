import { Divider } from '@mui/material'
import React from 'react'

function RightComponents() {
    return (
        <div style={{ width: "59%", backgroundColor: "white", height: "80vh", border: "2px solid lightblue", borderRadius: 10 }}>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                <h4>Family Details</h4>
            </div>
            <Divider />
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "30%", height: "100%", paddingLeft: 40 }}>
                    <ul>Name</ul>
                    <ul>Spouse</ul>
                    <ul>Location</ul>
                    <ul>Birth Year</ul>
                    <ul>Present Address</ul>
                    <ul>Famiy Photo</ul>
                </div>
                <div style={{ width: "70%", height: "100%" }}>
                    <ul>:Son of Grandfather</ul>
                    <ul>:Spouse name</ul>
                    <ul>:Bhopal</ul>
                    <ul>:1980</ul>
                    <ul>:123 Patel Road Road Bhopal</ul>
                    <ul>:
                        <div style={{ display: "flex", bottom: 12 }}>
                            <div style={{ height: 100, width: 120, border: "1px solid black", marginRight: 50, marginLeft: 20 }}></div>
                            <div style={{ height: 100, width: 120, border: "1px solid black" }}></div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightComponents