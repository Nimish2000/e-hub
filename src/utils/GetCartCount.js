const getCartCount = (products) => {
  let cnt = 0;
  products.map((item) => {
    if (item.isCart) cnt++;
  });
  return cnt;
};

export default getCartCount;
