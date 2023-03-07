const getTotalPrice = (products) => {
  let sum = 0;
  products.map((item) => {
    if (item.isCart) sum += item.price.toFixed(2) * item.quantity.toFixed(2);
  });

  return sum.toFixed(2);
};

export default getTotalPrice;
