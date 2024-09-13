const isExistCart = (cart, menu) => {
  return cart.some((item) => item.id === menu.id);
};

const updateCart = ({ cart, menu, quantity }) => {
  return cart.map((item) => {
    if (item.id === menu.id) {
      return {
        ...item,
        quantity: item.quantity + quantity,
      };
    }
    return item;
  });
};

const addMenuToCart = ({ cart, menu, quantity }) => {
  return [...cart, { ...menu, quantity }];
};

const hasDiffRestaurant = (cart, menu) => {
  return cart.some((item) => item.restaurantId !== menu.restaurantId);
};

const checkRestaurantDiff = (cart, menu) => {
  if (hasDiffRestaurant(cart, menu)) {
    const confirm = window.confirm(
      "장바구니에는 같은 가게의 메뉴만 담을 수 있습니다. 기존 메뉴를 삭제하고 새로 담으시겠습니까?"
    );

    return confirm;
  }

  return false;
};

const cartService = {
  isExistCart,
  updateCart,
  checkRestaurantDiff,
  addMenuToCart,
};

export default cartService;
