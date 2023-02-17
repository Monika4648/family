import { ChartDiv } from "./TreeNode"
import { TreeNode as TreeChild } from 'react-organizational-chart';
export function buildTree(array) {
  let tree = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].parent_id) {
      let parent = array.filter(elem => elem.id === array[i].parent_id).pop()
      parent.children.push(array[i])
    } else {
      tree.push(array[i])
    }
  }
  return tree
}
export const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

export const TreeNodes = ({ node }) => {
  return (
    <TreeChild label={<ChartDiv>{node.Name}</ChartDiv>} >
      {node.children && Object.values(node.children).map(childNode => <TreeNodes key={childNode.id} node={childNode} />)}
    </TreeChild>
  )
}