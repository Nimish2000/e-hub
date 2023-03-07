const getFilterCount = (products, category) => {
  if (category === "") return products.length;

  let cnt = 0;
  products.map((val) => {
    if (val.category === category) cnt++;
  });
  return cnt;
};

export default getFilterCount;
