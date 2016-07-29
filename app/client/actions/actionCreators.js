// we must find a way to actually change state with these functions.
// create a reducer on the other end...

// increment a like
// actions are just objects
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
