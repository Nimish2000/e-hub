const getTotalPrice = (products) => {
  let sum = 0;

  for (let val in products) {
    if (products[val].isCart)
      sum += products[val].price.toFixed(2) * products[val].quantity.toFixed(2);
  }

  return sum.toFixed(2);
};

export default getTotalPrice;
