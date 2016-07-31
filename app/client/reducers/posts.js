// // a reducer takes two things: action, copy of current state.
// // redux: do not mutate state. So use functional programming in pure functions.
// // all the reducers run for every single call of this function.

// function posts(state = [], action) {
//   switch(action.type) {
//     case 'INCREMENT_LIKES' :
//       console.log('incrementing likes');

//       const i = action.index;
//     // return updated state of only one of the arrays.
//     // return a new array; but only change one of them.
//     // es6 object spread is being used here.
//       return [
//         ...state.slice(0,i), // before the one we are updating
//         {...state[i], likes: state[i].likes + 1},
//         ...state.slice(i + 1), // after the one we are updating
//       ]
//     default:
//       return state;
//   }
// }

// export default posts;
