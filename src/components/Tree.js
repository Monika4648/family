import React from 'react'
import TreeNode from './TreeNode';

function Tree({ treeData }) {
    return (
      <ul>
        {treeData.map((node,index) => (
          <TreeNode node={node} key={index} />
        ))}
      </ul>
    );
  }

export default Tree