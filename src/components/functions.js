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