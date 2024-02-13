const filter = (arr, key, val) => {
  const newArr = arr.filter(el => {
    return el[key] === val;
  });
  return newArr;
};

export default filter;
