import _reduce from "lodash.reduce";

const getFilterCount = (products, category) => {
  if (category === "All") return products.length;
  return _reduce(
    products,
    (cnt, product) => {
      return cnt + Number(product.category === category);
    },
    0
  );
};

export default getFilterCount;
