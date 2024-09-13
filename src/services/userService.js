const isCouponExist = (coupons, coupon) => {
  return coupons.some((c) => c.id === coupon.id);
};

const addCoupon = (coupons, coupon) => {
  return [...coupons, coupon];
};

const userService = {
  isCouponExist,
  addCoupon,
};

export default userService;
