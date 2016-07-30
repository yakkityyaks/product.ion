// we must find a way to actually change state with these functions.
// create a reducer on the other end...

// increment a like
// actions are just objects
export const SELECT_DATA = 'SELECT_DATA'

export function selectData(data) {
  return {
    type: SELECT_DATA,
    data
  }
}

export const INVALIDATE_DATA = 'INVALIDATE_DATA'

export function invalidateSubreddit(data) {
  return {
    type: INVALIDATE_DATA,
    data
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(posts) {
  return {
    type: REQUEST_POSTS,
    posts
  }
}
