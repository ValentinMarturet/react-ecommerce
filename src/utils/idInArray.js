const idInArray = (cartItems, newItem) => {
  return cartItems.some((element) => {
    return element.id === newItem.id;
  });
};

export default idInArray;
