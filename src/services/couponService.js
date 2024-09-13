const discountPriceWithCoupon = (price, coupon) => {
  if (coupon === undefined) return price;
  if (coupon.minimumOrderAmount > price) return price;
  if (coupon.type === "deliveryFee") return price;

  return calcPrice({
    price,
    coupon,
    discount: couponTypeDiscount[coupon.type],
  });
};

const discountDeliveryFeeWithCoupon = (deliveryFee, coupon) => {
  if (coupon === undefined) return deliveryFee;
  if (coupon.minimumOrderAmount > deliveryFee) return deliveryFee;
  if (coupon.type !== "deliveryFee") return deliveryFee;
  return 0;
};

const calcPrice = ({ price, coupon, discount }) => {
  return discount(price, coupon);
};

const discountAmount = (price, coupon) => {
  return Math.max(0, price - coupon.discountAmount);
};

const discountRate = (price, coupon) => {
  return price * ((100 - coupon.discountPercentage) / 100);
};

const couponTypeDiscount = {
  fixedAmount: discountAmount,
  discount: discountRate,
};

const couponService = {
  discountPriceWithCoupon,
  discountDeliveryFeeWithCoupon,
};

export default couponService;
