import couponService from "./couponService";

const getAvailableCoupons = ({ coupons, restaurantId, price }) => {
  return coupons
    .filter((coupon) => {
      return coupon.restaurantId === restaurantId;
    })
    .filter(
      (coupon) =>
        coupon.minimumOrderAmount === undefined ||
        coupon.minimumOrderAmount <= price
    );
};

const findSelectedCouponById = (coupons, selectedCouponId) => {
  return coupons.find((coupon) => coupon.id.toString() === selectedCouponId);
};

const calcTotalMenuPrice = (cart) => {
  return cart.reduce((price, item) => price + item.price * item.quantity, 0);
};

const calcFinalPrices = ({ menuPrice, deliveryFee, selectedCoupon }) => {
  const finalPrice = couponService.discountPriceWithCoupon(
    menuPrice,
    selectedCoupon
  );

  const finalDelivaryFee = couponService.discountDeliveryFeeWithCoupon(
    deliveryFee,
    selectedCoupon
  );

  return [finalPrice, finalDelivaryFee];
};

const orderService = {
  getAvailableCoupons,
  findSelectedCouponById,
  calcTotalMenuPrice,
  calcFinalPrices,
};

export default orderService;
