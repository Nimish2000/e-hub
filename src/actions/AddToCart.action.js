export const increment = (id) => {
  return {
    type: "INCREMENT",
    id: id,
  };
};

export const decrement = (id) => {
  return {
    type: "DECREMENT",
    id: id,
  };
};
