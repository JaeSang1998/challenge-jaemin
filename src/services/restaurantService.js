const splitRestaurant = (restaurant) => {
  const { coupons, menuItems, ...rest } = restaurant;

  return { coupons, menuItems, restaurantInfo: rest };
};

const restaurantService = {
  splitRestaurant,
};

export default restaurantService;
