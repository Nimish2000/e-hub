const getFilterCount = (products, category) => {
  if (category === "") return products.length;

  let cnt = 0;

  for (let val in products) {
    if (products[val].category === category) cnt++;
  }

  return cnt;
};

export default getFilterCount;
