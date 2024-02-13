const filter = (arr, key, val) => {
  const a = arr.filter(el => {
    return el[key] === val;
  });
  return a;
};

export default filter;
