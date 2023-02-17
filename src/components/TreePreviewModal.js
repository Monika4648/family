import { Button } from '@mui/material';
import React, { useRef } from 'react'
import { Tree } from 'react-organizational-chart';
import { ChartDiv } from './TreeNode';
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import { Modal } from '@mui/material';

import { Portal } from './Portal';
import { useSelector } from 'react-redux';
import { nest, TreeNodes } from './functions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#FFFFDB',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '8px',
  overflow: 'auto',
  maxHeight: '90vh',
  borderRadius: 20
};

export const TreePreviewModal = ({ open, handleClose }) => {

  const { treedata, addparentId } = useSelector((state) => state.rootSlice)
  function returnObject(id, list) {
    let data = null
    list.forEach(item => {
      if (item.id === id) {
        return data = item
      } else {
        data = returnObject(id, item.children)
      }
    })
    return data
  }
  const findFamily = returnObject(addparentId, nest(treedata))
  const treeContainerEl = useRef()

  const savePdf = () => {
    html2canvas(document.getElementById('tree-chart')).then(canvas => {
      const data = canvas.toDataURL();
      const pdfExportSetting = {
        content: [
          {
            image: data,
            width: treeContainerEl.current?.clientWidth || 500,
          }
        ]
      };
      pdfMake.createPdf(pdfExportSetting).download("family-tree.pdf");
    });
  }

  return (

    <Portal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div style={style}>
            <div style={{ height: '80vh', minWidth: '34vw' }} id='tree-chart' ref={treeContainerEl}   >
              <Tree label={<ChartDiv>{findFamily?.Name}</ChartDiv>} >
                {findFamily?.children && Object.values(findFamily.children).map(childNode => <TreeNodes key={childNode.id} node={childNode} />)}
              </Tree>
            </div>
            <Button onClick={savePdf} >Save PDF</Button>
          </div>
        </div>
      </Modal>
    </Portal>
  )
}
