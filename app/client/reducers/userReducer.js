export default function reducer(state={
  user: {
    id: null,
    name: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_USER": {
      return Object.assign({}, state, {fetching: true});
    }
    case "FETCH_USER_REJECTED": {
      return Object.assign({}, state, {fetching: false, error: action.payload});
    }
    case "FETCH_USER_FULFILLED": {
      return Object.assign(
        {},
        state, {
        fetching: false,
        fetched: true,
        user: action.payload,
      });
    }
    case "SET_USER_NAME": {
      return Object.assign(
        {},
        state, {
        user: Object.assign({}, state.user, {name: action.payload})
      });
    }
  }
  console.log('STATE ', state);
  return state;
}
