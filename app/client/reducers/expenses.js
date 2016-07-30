function expenses(state = [], action) {
  switch (action.type) {
    case "NEW_EXPENSE":
      console.log("You did it!");
      break;
    default:
      return state;
  }
  return state;
}

export default expenses;
