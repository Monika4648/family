import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { addChildToFamily } from '../store/reducers/rootSlice';
import { TreeItem, TreeView } from '@mui/lab';

export const ChartDiv = ({ children }) => {
  return (
    <div
      style={{
        padding: '4px 16px',
        border: '1px solid black',
        borderRadius: '4px',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  )
}
function TreeNode({ node }) {
  const { searchfamily, treedata } = useSelector((state) => state.rootSlice)


  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.Name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  const dispatch = useDispatch()

  const handleSelect = (event, nodeIds) => {
    dispatch(addChildToFamily(nodeIds))
  };
  useEffect(() => {
    try {
      const fil = treedata.filter(ite => ite.Name.includes(searchfamily))[0]
      dispatch(addChildToFamily(fil.id))
    } catch (error) {
      console.log(error)
    }
  }, [ searchfamily])
  return (
    <>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        onNodeSelect={handleSelect}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(node)}
      </TreeView>
    </>
  );
}

export default TreeNode