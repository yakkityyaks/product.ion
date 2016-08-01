// we must find a way to actually change state with these functions.
// create a reducer on the other end...

// increment a like
// actions are just objects
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comments
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

//check to see if an organization exists
export function validateNewOrg(data) {
  return {
    type: 'VALIDATE_NEW_ORG',
    data
  };
}

//create a new organization
export function registerOrg(data) {
  return {
    type: 'REGISTER_ORG',
    data
  };
}
