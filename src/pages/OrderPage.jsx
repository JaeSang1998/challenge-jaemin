import React from "react";
import useCart from "../hooks/useCart";
import useRestaurant from "../hooks/useRestaurant";
import useUser from "../hooks/useUser";
import orderService from "../services/orderService";
import useCreateOrderMutation from "../mutations/useCreateOrderMuatation";

const OrderPage = () => {
  const { cart, restaurantId } = useCart();
  const { restaurantInfo } = useRestaurant(restaurantId);
  const { deliveryFee } = restaurantInfo;
  const { coupons } = useUser();
  const { mutate } = useCreateOrderMutation();

  const [selectedCouponId, setSelectedCouponId] = React.useState(0);
  const menuPrice = orderService.calcTotalMenuPrice(cart);

  const availableCoupons = orderService.getAvailableCoupons({
    coupons,
    restaurantId,
    price: menuPrice,
  });

  const selectedCoupon = orderService.findSelectedCouponById(
    availableCoupons,
    selectedCouponId
  );

  const [finalPrice, finalDelivaryFee] = orderService.calcFinalPrices({
    menuPrice,
    deliveryFee,
    selectedCoupon,
  });

  const handleCreateOrder = () => {
    mutate({
      restaurantId,
      orderItems: cart.map((item) => ({
        menuId: item.id,
        quantity: item.quantity,
      })),
      couponId: selectedCouponId,
    });
  };

  return (
    <>
      <select
        value={selectedCouponId}
        onChange={(e) => {
          setSelectedCouponId(e.target.value);
        }}
      >
        <option value={null}>쿠폰을 선택하세요</option>
        {availableCoupons.map((coupon) => (
          <option key={coupon.id} value={coupon.id}>
            {coupon.title}
          </option>
        ))}
      </select>
      <section>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
        <div>menu:{finalPrice}</div>
        <div>deliveryFee:{finalDelivaryFee}</div>
        <div>total:{finalPrice + finalDelivaryFee}</div>

        <button onClick={handleCreateOrder}>주문하기</button>
      </section>
    </>
  );
};

export default OrderPage;
