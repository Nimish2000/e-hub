const getFilterCount = (products, category) => {
  if (category === "") return products.length;

  let cnt = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) cnt++;
  }

  return cnt;
};

export default getFilterCount;
