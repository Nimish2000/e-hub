const handleQueryChange = (state = "", action) => {
  switch (action.type) {
    case "QUERY":
      return (state = action.query);
    default:
      return state;
  }
};

export default handleQueryChange;
