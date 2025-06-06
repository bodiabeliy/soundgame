const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };

  const getChildrenByGroup = (list) => {
    return Object.entries(groupBy(list, "itemName"));
  };
  export { getChildrenByGroup };