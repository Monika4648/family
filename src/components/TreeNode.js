import React, { useState } from 'react'
import Tree from './Tree';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { searchfamilydata } from '../store/reducers/rootSlice';
function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);
  const { searchfamily, } = useSelector((state) => state.rootSlice)
  const dispatch= useDispatch()
  const handleClick = () => {
    setShowChildren(!showChildren);
    dispatch(searchfamilydata(label))
  };
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: "10px" }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor:
         searchfamily !== "" ? label.includes(searchfamily) ? 'lightgray' : 'default' 
          : 'default'}}>
          {showChildren ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          <FolderOpenIcon color='yellow' />
          <span >{label}</span>
        </div>
      </div>
      <ul style={{ paddingLeft: "10px" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
}

export default TreeNode