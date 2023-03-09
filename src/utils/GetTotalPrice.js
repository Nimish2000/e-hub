const getTotalPrice = (products) => {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].isCart)
      sum += products[i].price.toFixed(2) * products[i].quantity.toFixed(2);
  }

  return sum.toFixed(2);
};

export default getTotalPrice;
