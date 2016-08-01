function expenses(state = [], action) {
  switch (action.type) {
    case "NEW_EXPENSE":
      console.log("You want to make a new expense!");
      break;
    default:
      return state;
  }
  return state;
}

export default expenses;
