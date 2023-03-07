const getCartCount = (products) => {
  let cnt = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].isCart) cnt++;
  }
  return cnt;
};

export default getCartCount;
