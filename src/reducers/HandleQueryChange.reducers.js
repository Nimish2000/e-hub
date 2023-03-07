const handleQueryChange = (state = "", action) => {
  switch (action.type) {
    case "QUERY":
      state = action.query;
      return state;
    default:
      return (state = state);
  }
};

export default handleQueryChange;
